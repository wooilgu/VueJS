<!-- eslint-disable no-unused-vars -->
<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Swal from 'sweetalert2'

import { useContactStore } from './../stores/contactStore'

const router = useRouter();
const store = useContactStore();

const { contact } = storeToRefs(store);

// 추가
const addContact = async (contact) => {
  try {
    // Promise return이라 Promise로 처리
    const resp = await store.addContact(contact);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success'});
      router.push('/list');   // 목록으로 이동
    } else if (resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '데이터 입력 실패', icon: 'warn'})
    }
  } catch(err) {
    Swal.fire({title: 'ERROR', text: '네트워크에 문제가 발생했습니다', icon: 'error'})
  }
}

onMounted(() => {
  store.clearContact();
})
</script>

<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name" 
        :value="contact.name" @input="(evt) => store.changeContact(evt)" /> <br />
      Tel: <input type="text" class="form-control" name="tel" 
        :value="contact.tel"  @input="(evt) => store.changeContact(evt)"  /> <br />
      Address: <input type="text" class="form-control" name="address" 
        :value="contact.address"  @input="(evt) => store.changeContact(evt)"  />
    </div>

    <button class="btn btn-outline-primary" @click="() => addContact(contact)">ADD</button>
  </div>
</template>
