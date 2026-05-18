<script setup>

</script>

<template>
  <div class="m-3">
    <h1>Chap06 Router</h1>

    <div>
      <RouterLink to="/">INDEX</RouterLink> | 
      <RouterLink to="/A01Bind">BIND</RouterLink> | 
      <RouterLink :to="{name: 'attr'}">A02ATTR</RouterLink> | 

      <RouterLink to="/A03Params">P1001</RouterLink> | 
      <RouterLink :to="{name: 'param'}">P1002</RouterLink> | 

      <RouterLink to="/A04Props">P1003</RouterLink> | 
      <RouterLink :to="{name: 'prop'}">P1004</RouterLink> | 
      
      <RouterLink :to="{name: 'contact'}">CONTACT</RouterLink> | 

      <RouterLink to="/A06Query">Q1005</RouterLink> | 
      <RouterLink :to="{name: 'query'}">Q1006</RouterLink> | 

      <RouterLink :to="{name: 'push'}">PUSH</RouterLink> | 

      <RouterLink :to="{name: 'child'}">CHILD</RouterLink> | 
    </div>

    <hr />

    <div class="mb-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
.active {
  color: orange !important;
  font-weight: bold;
}
</style>