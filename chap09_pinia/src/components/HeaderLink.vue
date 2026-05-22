<template>
  <div>
    <RouterLink to="/" exact-active-class="active">HOME</RouterLink> | 
    <RouterLink to="/about" exact-active-class="active">ABOUT</RouterLink> | 
    <RouterLink to="/list"  exact-active-class="active">LIST</RouterLink> | 
    <RouterLink to="/add"  exact-active-class="active">ADD</RouterLink>
  </div>
</template>

<style>
.active {
  color: orange !important;
  font-weight: bold;
}
</style>
