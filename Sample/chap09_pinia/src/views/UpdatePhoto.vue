<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useContactStore } from './../stores/contactStore'

const router = useRouter();
const store = useContactStore();

const { contact } = storeToRefs(store);

</script>

<template>
  <div class="card" style="width: 50rem">
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진: <br />
          <img class="thumb" width="100" />
        </div>
        <br />

        <div>
          사진 파일 선택: <br />
          <input type="file" name="photo" class="form-control" />
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변경" />
          <input type="button" class="btn btn-primary" value="취소" @click="router.push('/list')"/>
        </div>
      </form>
    </div>
  </div>
</template>
