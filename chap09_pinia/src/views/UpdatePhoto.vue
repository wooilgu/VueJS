<!-- eslint-disable no-unused-vars -->
<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useContactStore } from './../stores/contactStore'

const router = useRouter();
const store = useContactStore();
const props = defineProps(['no']);

const { contact } = storeToRefs(store);

const updatePhoto = async () => {
  // 사진 추출
  const elem = document.querySelector('input[name="photo"]');
  const file = elem?.files[0] ?? null;

  try {
    // Promise return이라 Promise로 처리
    const resp = await store.updatePhoto(props.no, file);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '이미지 수정 성공', icon: 'success'});
      router.push('/list');   // 목록으로 이동
    } else if (resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '이미지 수정 실패', icon: 'warn'})
    }
  } catch(err) {
    Swal.fire({title: 'ERROR', text: '네트워크에 문제가 발생했습니다', icon: 'error'})
  }
}

onMounted(() => {
  store.getContact(props.no)
})
</script>

<template>
  <div class="card" style="width: 50rem">
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진: {{ contact.photo }}<br />
          <img class="thumb" width="100" :src="contact.photo" />
        </div>
        <br />

        <div>
          사진 파일 선택: <br />
          <input type="file" name="photo" class="form-control" />
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변경" @click="updatePhoto" />
          <input type="button" class="btn btn-primary" value="취소" @click="router.push('/list')"/>
        </div>
      </form>
    </div>
  </div>
</template>
