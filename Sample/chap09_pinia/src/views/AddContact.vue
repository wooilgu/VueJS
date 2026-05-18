<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Swal from 'sweetalert2'

import { useContactStore } from './../stores/contactStore'

const router = useRouter();
const store = useContactStore();

const { contact } = storeToRefs(store);

</script>

<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name" :value="contact.name" @input="store.changeContact($event)" /> <br />
      Tel: <input type="text" class="form-control" name="tel" :value="contact.tel" @input="store.changeContact($event)" /> <br />
      Address: <input type="text" class="form-control" name="address" :value="contact.address" @input="store.changeContact($event)" />
    </div>

    <button class="btn btn-outline-primary">ADD</button>
  </div>
</template>
