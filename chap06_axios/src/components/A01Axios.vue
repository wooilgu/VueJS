<script setup>
// npm i bootstrap axios sweetalert2 p-min-delay
import { ref } from 'vue';
import axios from 'axios';

// const baseURL = 'https://sample.bmaster.kro.kr'
// const baseURL = 'http://localhost:8000';
const data = ref('');

// main.js에 axios의 기본값을 설정 후 사용하는 방식
const getContactList = (no = 1, size = 10) => {
  // axios.get(url, { options })
  axios
    .get(`/contacts`, { params: { pageno: no, pagesize: size } })
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};
const getContactListAsync = async (no = 1, size = 10) => {
  try {
    const resp = await axios.get(`/contacts`, { params: { pageno: no, pagesize: size } });
    data.value = JSON.stringify(resp.data, null, 4);
  } catch (err) {
    console.error(err);
  }
};
const getContact = (no) => {
  axios({ method: 'GET', url: `/contacts/${no}` })
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};
const addContact = () => {
  const person = { name: '강감찬', tel: '010-2222-3339', address: '서울시' };

  axios
    .post(`/contacts`, JSON.stringify(person))
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};
const updateContact = (no) => {
  const person = { no, name: '이순신', tel: '010-2222-2222', address: '충무시' };

  axios
    .put(`/contacts/${no}`, person) // 직렬화 해야 한다
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};
const deleteContact = (no) => {
  axios
    .delete(`/contacts/${no}`)
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};

/*
const getContactList = (no = 1, size = 10) => {
  // axios.get(url, { options })
  axios
    // .get(`${baseURL}/contacts?pageno=${no}&pagesize=${size}`)
    .get(`${baseURL}/contacts`, {
      params: { pageno: no, pagesize: size },
      headers: { Accept: 'application/json' },
      timeout: 5000,
    })
    .then((resp) => {
      // console.log(resp);
      data.value = JSON.stringify(resp.data, null, 4);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('목록 조회 완료');
    });
};
const getContactListAsync = async (no = 1, size = 10) => {
  try {
    // then -
    // await 가 있는 함수는 반드시 async 함수로 정의 해 주어야 한다
    // 데이터 응답을 받을때가지 대기 상태. 데이터를 받으면 다음 줄로 이동
    // 에러가 발생하면 catch 블록으로 이동
    const resp = await axios.get(`${baseURL}/contacts`, {
      params: { pageno: no, pagesize: size },
      headers: { Accept: 'application/json' },
      timeout: 5000,
    });
    data.value = JSON.stringify(resp.data, null, 4);
  } catch (err) {
    //catch
    console.error(err);
  } finally {
    // finally
    console.log('목록 조회 완료');
  }
};
const getContact = (no) => {
  axios({
    method: 'GET',
    url: `${baseURL}/contacts/${no}`,
    params: {},
    // post, put에서 서버로 전송될 값
    data: '',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    timeout: 5000,
  })
    .then((resp) => {
      // console.log(resp);
      data.value = JSON.stringify(resp.data, null, 4);
    })
    .catch((err) => {
      console.error(err);
    });
};
const addContact = () => {
  const person = { name: '강감찬', tel: '010-2222-3339', address: '서울시' };

  // axios.post(url, 직렬화된 전송할값, { options })
  axios
    .post(`${baseURL}/contacts`, JSON.stringify(person), {
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000,
    })
    .then((resp) => {
      // console.log(resp);
      data.value = JSON.stringify(resp.data, null, 4);
    })
    .catch((err) => {
      console.error(err);
    });
};
const updateContact = (no) => {
  const person = { no, name: '이순신', tel: '010-2222-2222', address: '충무시' };

  // axios.put(url, 직렬화된 전송할값, { options })
  axios
    .put(`${baseURL}/contacts/${no}`, JSON.stringify(person), {
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000,
    })
    .then((resp) => {
      // console.log(resp);
      data.value = JSON.stringify(resp.data, null, 4);
    })
    .catch((err) => {
      console.error(err);
    });
};
const deleteContact = (no) => {
  // axios.delete(url, { options })
  axios
    .delete(`${baseURL}/contacts/${no}`, { timeout: 5000 })
    .then((resp) => (data.value = JSON.stringify(resp.data, null, 4)))
    .catch((err) => console.error(err));
};
*/
</script>

<template>
  <div>
    <h3>A01 Axios</h3>

    <div class="mb-3">
      <button @click="() => getContactList(1, 5)">Get ContactList</button>
      <button @click="() => getContactListAsync(2, 5)">Get ContactList Async</button>
      <button @click="() => getContact(1)">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="() => updateContact(1779342210066)">Update Contact</button>
      <button @click="() => deleteContact(1779342210066)">Delete Contact</button>
    </div>

    <div class="mb-5">
      <textarea rows="10" readonly style="width: 100%" :value="data"></textarea>
    </div>
  </div>
</template>

<!--
<script>
import axios from 'axios'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 3000;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// const baseURL = 'https://sample.bmaster.kro.kr/
// const baseURL = 'http://localhost:8000'
// const baseURL = '/api'

export default {
  data: function() {
      return { data: '' }
  },
  methods: {
    getContactList(no=1, size=10) {
      axios.get('/contacts', {params: {pageno: no, pagesize: size}})
        .then((resp) => this.data = JSON.stringify(resp.data, null, 4))
        .catch((err) => console.error(err))
    },
    async getContactListAsync(no=1, size=10) {
      try {
        const resp = await axios.get('/contacts', {params: {pageno: no, pagesize: size}});
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async getContact(no) {
      try {
        const resp = await axios.get(`/contacts/${no}`);
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async addContact() {
      const person = {
        name: '강감찬',
        tel: '010-2222-3339',
        address: '서울시'
      }
      try {
        const resp = await axios.post(`/contacts`, person);
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async updateContact(no) {
      const person = {
        no,
        name: '이순신',
        tel: '010-2222-2222',
        address: '충무시'
      }
      try {
        const resp = await axios.put(`/contacts/${no}`, person);
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async deleteContact(no) {
      try {
        const resp = await axios.delete(`/contacts/${no}`);
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    /*
    getContactList(no=1, size=10) {
      axios.get(baseURL + '/contacts', {
          params: {pageno: no, pagesize: size}, 
          timeout: 3000,
          headers: { 'Content-Accept': 'application/json' }
        })
        // 요청이 성공했을 경우 실행할 함수를 전달
        .then((resp) => {
          // console.log(resp);
          this.data = JSON.stringify(resp.data, null, 4);
        })
        // 요청이 실패했을 경우 실행할 함수를 전달
        .catch((err) => {
          console.error(err)
        })
    },
    async getContactListAsync(no=1, size=10) {
      try {
        const resp = await axios.get(baseURL + '/contacts', {params: {pageno: no, pagesize: size}});
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async getContact(no) {
      try {
        const resp = await axios.get(baseURL + `/contacts/${no}`, { timeout: 3000 });
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async addContact() {
      const person = {
        name: '강감찬',
        tel: '010-2222-3339',
        address: '서울시'
      }
      try {
        const resp = await axios.post(baseURL + `/contacts`, person, 
          { timeout: 3000, headers: { 'Content-Type': 'application/json' } });
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async updateContact(no) {
      const person = {
        no,
        name: '이순신',
        tel: '010-2222-2222',
        address: '충무시'
      }
      try {
        const resp = await axios.put(baseURL + `/contacts/${no}`, person, 
          { timeout: 3000, headers: { 'Content-Type': 'application/json' } });
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
    async deleteContact(no) {
      try {
        const resp = await axios.delete(baseURL + `/contacts/${no}`, { timeout: 3000 });
        this.data = JSON.stringify(resp.data, null, 4);
      } catch(err) {
        console.error(err)
      }
    },
  */
  }
}
</script>

<template>
  <div>
    <h3>A01 Axios</h3>

    <div>
      <button @click="() => getContactList(1, 5)">Get ContactList</button>
      <button @click="() => getContactListAsync(2, 5)">Get ContactList Async</button>
      <button @click="() => getContact(1)">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="() => updateContact(1758168699904)">Update Contact</button>
      <button @click="() => deleteContact(1758168699904)">Delete Contact</button>
    </div>

    <div>
      <textarea cols="100" rows="10" readonly :value="data"></textarea>
    </div>
  </div>
</template>
-->
