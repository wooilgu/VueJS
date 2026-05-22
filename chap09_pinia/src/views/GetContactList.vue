<script setup>
// npm i vuejs-paginate-next

// default export가 아닌 개별 export 
import { useContactStore } from './../stores/contactStore'
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import Paginate from 'vuejs-paginate-next'

const store = useContactStore();
// 이런식으로 값을 꺼내면 상태가 깨진다. 상태변수에서 값을 꺼내면 상태가 깨진다
// const { isLoading, isError, contactList } = store;

/*
  1. store 값을 가져와 참조
  2. store 값을 변경하기 위해 store Action 호출 => store.getContactList(1, 5);
  3. store의 상태 변수가 변경됨
  4. store의 상태 변수 값을 사용하고 있는 컴포넌트는 값 변경 통보를 받음
  5. 컴포넌트는 새로운 값을 가져와 화면 갱신
*/
const { isLoading, isError, contactList } = storeToRefs(store);

// paginate
const totalPage = computed(() => Math.ceil(contactList.value.totalcount / contactList.value.pagesize))
const clickCallback = (no) => store.getContactList(no, 5);

onMounted(() => {
  store.getContactList(1, 5);
})
</script>

<template>
    <div class="position-relative"> 
      <div class="d-flex justify-content-center my-5" v-if="isLoading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-if="isError">
        <h1>Error: {{ isError.message }}</h1>
      </div>

      <div v-if="!isError && !isLoading">
        <table  class="table">
          <thead>
            <tr>
              <th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contactList.contacts" :key="contact.no">
              <td>{{ contact.no }}</td>
              <td>
                <RouterLink :to="{name: 'contact', params: {no: contact.no}}">
                  {{ contact.name }}
                </RouterLink>
              </td>
              <td>{{ contact.tel }}</td>
              <td>{{ contact.address }}</td>
              <td>
                <RouterLink :to="{name: 'photo', params: {no: contact.no}}">
                  <img v-bind:src="contact.photo" width="70" alt="사진">
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex justify-content-center">
          <Paginate v-model="num"
            :page-count="totalPage"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </Paginate>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* 자식 컴포넌트인 paginate 내부까지 스타일이 전달되도록 :deep() 선택자를 사용해야 한다. */
.pagination {
  margin-top: 20px;
}

/* 1. 모든 버튼 공통 스타일 */
:deep(.page-item .page-link) {
  color: #2c3e50;
  margin: 0 3px;
  border: 1px solid #ddd;
  padding: 8px 16px; /* 사각형일 때 보기 좋은 여백 */
  border-radius: 4px; 
}

/* 2. 숫자 버튼만 동그란 모양으로 변경 (첫 번째와 마지막 제외) */
:deep(.page-item:not(:first-child):not(:last-child) .page-link) {
  border-radius: 50%;
  width: 40px;  /* 원형을 위해 가로세로 고정 */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;   /* 패딩 초기화 */
}

/* 3. 이전(Prev) / 다음(Next) 버튼 전용 스타일 (사각형 강조) */
:deep(.page-item:first-child .page-link), 
:deep(.page-item:last-child .page-link) {
  font-weight: bold;
  color: #666;
  border-radius: 4px !important;    /* 강제로 사각형 유지 */
  background-color: #f8f9fa;      /* 배경색을 살짝 다르게 */
}

/* 4. 마우스 올렸을 때 (Hover) */
:deep(.page-item .page-link:hover) {
  background-color: #f8f9fa;
  color: #42b983;
}

/* 5. 선택된 번호 (Active) 스타일 */
:deep(.page-item.active .page-link) {
  background-color: #42b983;
  border-color: #42b983;
  color: white;
}
</style>