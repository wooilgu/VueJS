<script setup>
import contactlist from './data/ContactList';
const contacts = contactlist.contacts;
</script>

<template>
  <div>
    <h3>A08 Child Router</h3>

    <div class="mb-3">
      <RouterLink :to="{name: 'info'}">INFO</RouterLink> | 
      <RouterLink to="/A08Child/way">WAY</RouterLink> | 
      <span v-for="contact in contacts" :key="contact.no">
        <RouterLink :to="{name: 'view', params: {no: contact.no}}">{{ contact.name }}</RouterLink> | 
      </span>
    </div>

    <div class="mb-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<!--
<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<template>
  <div>
    <h3>A08 Child Router</h3>

    <div>
      <RouterLink to="/A02Attr">A02Attr</RouterLink> | 
      <RouterLink to="/A08Child/">INFO</RouterLink> | 
      <RouterLink to="/A08Child/way">WAY</RouterLink> | 
      <span v-for="contact in contacts" :key="contact.no">
        <RouterLink :to="`/A08Child/${contact.no}`">{{ contact.name }}</RouterLink> |  
      </span>
    </div>
    <br />

    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
-->