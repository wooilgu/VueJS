<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';

import { useContactStore } from '@stores/contactStore';

const props = defineProps(['no']);
const router = useRouter();

const store = useContactStore();
/*
  1. 사용할 값을 스토어로 부터 정의
  2. store의 Action 호출 => store.getContact(props.no)
  3. store 상태 변경 => 값 가져와서 화면 갱신
*/
const { isLoading, isError, contact } = storeToRefs(store);

// 삭제
const deleteContact = async () => {
  try {
    // Promise return이라 Promise로 처리
    const resp = await store.deleteContact(props.no);
    if (resp.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' });
      router.push('/list'); // 목록으로 이동
    } else if (resp.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'warn' });
    }
  } catch (err) {
    Swal.fire({ title: 'ERROR', text: '네트워크에 문제가 발생했습니다', icon: 'error' });
  }
};

onMounted(() => {
  store.getContact(props.no);
});
</script>

<template>
  <!-- isLoading, isError는 contactList 처럼 구현 -->
  <div class="container-fluid">
    <h3>Get Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" disabled :value="contact.name" /> <br />
      Tel: <input type="text" class="form-control" disabled :value="contact.tel" /> <br />
      Address: <input type="text" class="form-control" disabled :value="contact.address" />
    </div>

    <div>
      <button class="btn btn-outline-primary" @click="() => router.push('/update')">수정</button>
      <button class="btn btn-outline-primary" @click="deleteContact">삭제</button>
    </div>
  </div>
</template>
