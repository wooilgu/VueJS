<script setup>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import { onMounted } from 'vue';

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
}
const showAddModal = () => {
  addModal.show();
}

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

</script>

<template>
  <div class="mb-5">
    <table class="table">
      <thead>
        <tr><th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th></tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" id="addBtn" @click="showAddModal">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" disabled/>
              Tel: <input type="text" class="form-control" disabled/>
              Address: <input type="text" class="form-control" disabled/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">DELETE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control"/>
              Tel: <input type="text" class="form-control"/>
              Address: <input type="text" class="form-control"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"/>
            Tel: <input type="text" class="form-control"/>
            Address: <input type="text" class="form-control"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" @click="moveFocusToAddBtn">CLOSE</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">ADD</button>
          </div>
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