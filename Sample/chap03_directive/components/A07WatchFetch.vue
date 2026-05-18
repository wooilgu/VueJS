<script setup>
// const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/';
const baseURL = 'http://localhost:8000';

</script>

<template>
  <h3>A07 Watch</h3>

  <div class="mb-5">
    <input type="text" class="form-control"><br>
    <table class="table">
      <thead>
        <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div>Loading....</div>
  </div>  

  <div class="mb-5">
    <button class="btn btn-outline-primary btn-sm">STOP</button>
  </div>
</template>

<!--
<script>
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  data() {
    return {
      x: 10,
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: [],
    };
  },
  methods: {
    onTotal(y) {
      this.total = Number(this.x) + Number(y);
    },
    getContactList(name) {
      if (name.trim().length >= 2) {
        this.isLoading = true;

        fetch(baseURL + name)
          .then(resp => {
            // console.log(resp);
            // return resp.text();      // JSON 객체로 반환
            return resp.json(); // JSON Data => JavaScript 객체
          })
          .then(data => {
            // console.log(data);
            this.contactList = data;
          })
          .catch(err => {
            console.error(err);
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
  },
  watch: {
    // data의 변수명과 동일한 이름으로 정의
    // 상태변수가 변경되면 화면 리 렌더링시 다른 부수 작업이 필요한 경우 정의
    x(newVal, oldVal) {
      console.log(newVal, typeof newVal, oldVal);
      this.total = Number(newVal) + this.y;
    },
    y(newVal) {
      this.onTotal(newVal);
    },
    name(newVal) {
      this.getContactList(newVal);
    },
  },
};
</script>

<template>
  <h3>A07 Watch</h3>

  <div class="mb-5">
    <input type="text" class="form-control" v-model="x" /><br />
    <input type="text" class="form-control" v-model="y" /><br />
    Total: {{ total }}<br />
    <br />

    <input type="text" class="form-control" v-model="name" /><br />
    <table class="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>NAME</th>
          <th>TEL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in contactList" :key="item.no">
          <td>{{ item.no }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading">Loading....</div>
  </div>
</template>
-->