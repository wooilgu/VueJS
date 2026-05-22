<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2'

import { useContactStore } from './../stores/contactStore'

const router = useRouter();
const store = useContactStore();

</script>

<template>
  <div class="container-fluid">
    <h3>Update Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name" /> <br />
      Tel: <input type="text" class="form-control" name="tel" /> <br />
      Address: <input type="text" class="form-control" name="address" />
    </div>

    <button class="btn btn-outline-primary">UPDATE</button>
  </div>
</template>
