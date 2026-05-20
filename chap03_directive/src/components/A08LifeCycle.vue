<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

const baseURL = 'http://localhost:8000/contacts_long/search/';
const num = ref(0);
const increase = () => num.value++;
const decrease = () => num.value--;

const contactList = ref([]);
const isLoading = ref(false);

const getContactList = (search) => {
  isLoading.value = true;

  fetch(baseURL + search)
    .then((resp) => resp.json())
    .then((data) => (contactList.value = data))
    .catch((error) => console.error(error))
    .finally(() => (isLoading.value = false));
};

// 컴포넌트가 특정한 시점(화면표시, 화면에서 삭제 등)에 호출될 함수를
// 특정한 이름으로 정의해 놓음 => 시점이되면 자동으로 호출되서 실행됨. 이를 라이프사이클 메서드라고 한다
// data, event 초기화(beforeCreate, created) => setUp이 담당

// + 버튼 배경색을 오렌지로 변경
// template를 읽기 전 상태. 따라서 DOM 요소를 참조할 수 없다.
// document.querySelector('#plus').style.backgroundColor = 'orange';

// beforeMount => DOM 생성 전.
onBeforeMount(() => {
  console.log('onBeforeMount');
});
// mounted => DOM 생성 완료 후.
onMounted(() => {
  console.log('onMounted');
  getContactList('jo');

  document.querySelector('#plus').style.backgroundColor = 'orange';
  document.querySelector('#minus').style.backgroundColor = 'gray';
});

// beforeUpdate => 상태 변경 전
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
// updated => 상태 변경 후
// 여기서 contactList/isLoading/num 같은 상태 변경하면 무한 업데이트
onUpdated(() => {
  console.log('onUpdated');
});

// beforeUnmount => DOM에서 제거되기 직전(아직 화면 보임. script 접근 가능).
// clearInterval, removeEventListener, disconnect()
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');

  // 사용한 watch 함수를 정리
});

// unmounted => DOM에서 제거된 상태
// 정리 완료에 가까운 Hook
onUnmounted(() => {
  console.log('unMounted');
});

console.log('setup이 모두 실행됨.....');
</script>

<template>
  <h3>A08 LifeCycle</h3>

  <div class="mb-3">
    Num: {{ num }}<br />
    <button v-on:click="increase()" id="plus">+1</button>
    <button v-on:click="decrease()" id="minus">-1</button>
  </div>

  <div class="mb-5">
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
        <tr v-for="contact in contactList" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading">Loading....</div>
  </div>
</template>

<!--
<script>
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  data() {
    return {
      num: 0,
      isLoading: false,
      contactList: [],
    };
  },
  methods: {
    increase() {
      this.num += 1;
    },
    decrease() {
      this.num -= 1;
    },
    searchContact(keyword) {
      if (keyword.trim().length >= 2) {
        this.isLoading = true;
        fetch(baseURL + keyword)
          .then(resp => resp.json())
          .then(data => (this.contactList = data))
          .catch(error => console.error(error))
          .finally(() => (this.isLoading = false));
      }
    },
  },
  computed: {},
  watch: {},

  // data, event 초기화 전
  beforeCreate() {
    console.log('beforeCreate');
  },
  // data, event 초기화 완료
  created() {
    console.log('created');
    this.searchContact('ab');
  },
  // DOM 생성 전
  beforeMount() {
    console.log('beforeMount');
  },
  // DOM 생성 완료 후 mount
  mounted() {
    // console.log('mounted');
    // this.searchContact('ab');
  },
  // state 변경 전
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // state 변경 후
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    // beforeDestory
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted'); // destoryed
  },
};
</script>

<template>
  <h3>A08 LifeCycle</h3>

  <div class="mb-3">Num: {{ num }}</div>

  <div class="mb-3">
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>

  <div class="mb-5">
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
        <tr v-for="contact in contactList" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>
    <div v-show="isLoading">Loading....</div>
  </div>
</template>
-->
