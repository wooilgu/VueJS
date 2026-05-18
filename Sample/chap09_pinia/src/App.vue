<script setup>
// npm i axios bootstrap pinia sweetalert2 vue-router vuejs-paginate-next
import HeaderLink from './components/HeaderLink.vue';
</script>

<template>
  <div class="m-3">
    <h1>Chap09 Pinia</h1>

    <HeaderLink></HeaderLink>
    <hr />
    <RouterView></RouterView>
  </div>
</template>
