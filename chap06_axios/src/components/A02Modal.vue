<script setup>
// npm i p-min-delay vue3-spinners sweetalert2
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { VueSpinner } from 'vue3-spinners';
import pMinDelay from 'p-min-delay';
import Swal from 'sweetalert2';

let contentModal = '';
let updateModal = '';
let addModal = '';

const detachFocusBeforeHide = (modalEl) => {
  if (!modalEl) return;
  modalEl.addEventListener('hide.bs.modal', () => {
    if (modalEl.contains(document.activeElement)) {
      document.activeElement?.blur();
    }
  });
  modalEl.addEventListener('hidden.bs.modal', moveFocusToAddBtn);
};

const moveFocusToAddBtn = () => {
  const ensureVisibleAndFocus = () => {
    const app = document.getElementById('app');
    if (app && app.getAttribute('aria-hidden') === 'true') {
      requestAnimationFrame(ensureVisibleAndFocus);
      return;
    }
    const addBtn = document.getElementById('addBtn');
    addBtn?.focus();
  };
  requestAnimationFrame(ensureVisibleAndFocus);
};

const showUpdate = () => {
  contentModal.hide();
  updateModal.show();
};
const showAddModal = () => {
  // 기존의 데이터가 있는 경우 그 값을 싹 초기화 할 목적
  contact.value = { no: '', name: '', tel: '', address: '', photo: '' };
  addModal.show();
};

onMounted(() => {
  const getContentEl = document.getElementById('getContent');
  const updateContentEl = document.getElementById('updateContent');
  const addContentEl = document.getElementById('addContent');

  contentModal = new bootstrap.Modal(getContentEl, { keyboard: false });
  updateModal = new bootstrap.Modal(updateContentEl, { keyboard: false });
  addModal = new bootstrap.Modal(addContentEl, { keyboard: false });

  detachFocusBeforeHide(getContentEl);
  detachFocusBeforeHide(updateContentEl);
  detachFocusBeforeHide(addContentEl);
});

// 추가
const contactList = ref({ pageno: '', pagesize: '', totalcount: '', contacts: [] });
const contact = ref({ no: '', name: '', tel: '', address: '', photo: '' });
const loading = ref(false);
const isError = ref(false);

// axios가 기본 설정과 다른 경우 이렇게 사용한다
// 메서드 값 => create => default 순으로 참조한다.
const apiClient = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: '/api',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getContactList = async (no = 1, size = 10) => {
  loading.value = true;
  try {
    const resp = await pMinDelay(
      apiClient.get(`/contacts`, { params: { pageno: no, pagesize: size } }),
      1000,
    );
    contactList.value = resp.data;
  } catch (err) {
    console.error(err);
    isError.value = true;
  }
  loading.value = false;
};

const getContact = async (no) => {
  try {
    const resp = await apiClient.get(`/contacts/${no}`);
    contact.value = resp.data;
    // console.log(resp.data);
    console.log(contact.value);
  } catch (err) {
    console.error(err);
    isError.value = true;
  }

  // modal 활성화
  contentModal.show();
};

const deleteContact = async (no) => {
  try {
    const resp = await apiClient.delete(`/contacts/${no}`);
    if (resp.data.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' });
    } else if (resp.data.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' });
    }
  } catch (err) {
    console.error(err);
    isError.value = true;
  }

  // modal 닫기
  contentModal.hide();

  // contactList 상태변수 변경을 위해 서버 다시 요청
  getContactList(1, 5);
};

const updateContact = async (contact) => {
  try {
    const resp = await apiClient.put(`/contacts/${contact.no}`, contact);
    if (resp.data.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' });
    } else if (resp.data.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' });
    }
  } catch (err) {
    console.error(err);
    isError.value = true;
  }

  // modal 닫기
  updateModal.hide();

  // contactList 상태변수 변경을 위해 서버 다시 요청
  getContactList(1, 5);
};

const addContact = async (contact) => {
  try {
    const resp = await apiClient.post(`/contacts`, contact);
    if (resp.data.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' });
    } else if (resp.data.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' });
    }
  } catch (err) {
    console.error(err);
    isError.value = true;
  }

  // modal 닫기
  addModal.hide();

  // contactList 상태변수 변경을 위해 서버 다시 요청
  getContactList(1, 5);
};

onMounted(() => {
  getContactList(1, 5);
});
</script>

<template>
  <div v-if="isError">
    <h1>점검중...</h1>
  </div>
  <div v-if="loading">
    <VueSpinner color="orange" size="100"></VueSpinner>
  </div>
  <div class="mb-5" v-if="!isError && !loading">
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in contactList.contacts" :key="item.no">
          <td>{{ item.no }}</td>
          <td>
            <a href="javascript:;" @click="getContact(item.no)">{{ item.name }}</a>
          </td>
          <td>{{ item.tel }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.photo }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" id="addBtn" @click="showAddModal">ADD</button>
  </div>

  <div
    class="modal fade"
    id="getContent"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Name: {{ contact.name }}
          <input type="text" class="form-control" disabled :value="contact.name" />
          Tel:
          <input type="text" class="form-control" disabled :value="contact.tel" />
          Address:
          <input type="text" class="form-control" disabled :value="contact.address" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="moveFocusToAddBtn"
          >
            CLOSE
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="() => deleteContact(contact.no)"
          >
            DELETE
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="showUpdate">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Update Contact Modal -->
  <div
    class="modal fade"
    id="updateContent"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Name:
          <!-- v-model는 값 체크 안됨 => :value="값" @input="이벤트" 형태로 구현해서 값 체크 해야 한다 -->
          <input type="text" class="form-control" v-model="contact.name" />
          Tel:
          <input type="text" class="form-control" v-model="contact.tel" />
          Address:
          <input type="text" class="form-control" v-model="contact.address" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="moveFocusToAddBtn"
          >
            CLOSE
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="() => updateContact(contact)"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Contact Modal -->
  <div
    class="modal fade"
    id="addContent"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Name:
          <input type="text" class="form-control" v-model="contact.name" />
          Tel:
          <input type="text" class="form-control" v-model="contact.tel" />
          Address:
          <input type="text" class="form-control" v-model="contact.address" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="moveFocusToAddBtn"
          >
            CLOSE
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="() => addContact(contact)"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import axios from 'axios';
import Swal from 'sweetalert2'

// const baseURL = 'http://localhost:8000/contacts/';

// axios.get() 형태의 내부 옵션이 우선 => instance => default
// axios.defaults.baseURL = '/api';
// axios.defaults.timeout = 3000;
// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

// axios instance 생성
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  data() {
    return {
      contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
      contact: { no: '', name: '', tel: '', address: '', photo: '' },

      getContentModal: '',
      updateContentModal: '',
      addContentModal: '',
    }
  },
  methods: {
    viewUpdate() {
      this.getContentModal.hide()
      this.updateContentModal.show();
    },
    viewAdd() {
      // 기존 게시물이 있을 수 있음
      this.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      this.addContentModal.show();
    },
    moveFocusToAddBtn() {
      setTimeout(() => {
        const addBtn = document.getElementById('addBtn');
        if (addBtn) addBtn.focus();
      }, 0);
    },

    async getContactList(no=1, size=10) {
      try {
        // instance 참조로 axios 요청
        const resp = await apiClient.get('/contacts', {params: {pageno: no, pagesize: size}});
        this.contactList = resp.data;
      } catch(err) {
        console.error(err)
      }
    },
    async getContact(no) {
      try {
        const resp = await apiClient.get(`/contacts/${no}`);
        this.contact = resp.data;

        this.getContentModal.show();
      } catch(err) {
        console.error(err)
      }
    },
    async deleteContact(no) {
      try {
        const resp = await apiClient.delete(`/contacts/${no}`);
        // 모달창 닫기
        this.getContentModal.show();

        // 결과에 따라 팝업창 생성
        if(resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '게시물 삭제 성공', icon: 'success' });
        } else if(resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '게시물 삭제 실패', icon: 'error' });
        }

        // contactList를 갱신
        this.getContactList(1, 5);
      } catch(err) {
        console.error(err)
      }
    },
    async updateContact() {
      try {
        // if(this.contact.name !== '' && this.contact.tel !== '')
        const resp = await apiClient.put(`/contacts/${this.contact.no}`, this.contact);
        // 모달창 닫기
        this.updateContentModal.hide();

        // 결과에 따라 팝업창 생성
        if(resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '게시물 수정 성공', icon: 'success' });
        } else if(resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '게시물 수정 실패', icon: 'error' });
        }

        // contactList를 갱신
        this.getContactList(1, 5);
      } catch(err) {
        console.error(err)
      }
    },
    async addContact() {
      try {
        // if(this.contact.name !== '' && this.contact.tel !== '')
        const resp = await apiClient.post(`/contacts`, this.contact);
        // 모달창 닫기
        this.addContentModal.hide();

        // 결과에 따라 팝업창 생성
        if(resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '게시물 입력 성공', icon: 'success' });
        } else if(resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '게시물 입력 실패', icon: 'error' });
        }

        // contactList를 갱신
        this.getContactList(1, 5);
      } catch(err) {
        console.error(err)
      }
    },
  },
  mounted() {
    this.getContactList(1, 5);

    // esc키로 Modal창 닫기 => { keyboard: true }
    this.getContentModal = new bootstrap.Modal(document.getElementById('getContent'), { keyboard: false });
    this.updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), { keyboard: false });
    this.addContentModal = new bootstrap.Modal(document.getElementById('addContent'), { keyboard: true });
  }
}
</script>

<template>
  <div class="mb-5">
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td><a href="javascript:;" @click="() => getContact(contact.no)">{{ contact.name }}</a></td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img :src="contact.photo" width="70" alt="사진" /></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" id="addBtn" @click="viewAdd">ADD</button>

    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control" disabled  :value="contact.name" />
            Tel: <input type="text" class="form-control" disabled   :value="contact.tel"/>
            Address: <input type="text" class="form-control" disabled   :value="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="() => deleteContact(contact.no)">DELETE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="viewUpdate">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"   v-model.trim="contact.name" />
            Tel: <input type="text" class="form-control"    v-model.trim="contact.tel"/>
            Address: <input type="text" class="form-control" v-model.trim="contact.address" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="updateContact">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"   v-model.trim="contact.name" />
            Tel: <input type="text" class="form-control"    v-model.trim="contact.tel"/>
            Address: <input type="text" class="form-control" v-model.trim="contact.address" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="addContact">ADD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
-->
