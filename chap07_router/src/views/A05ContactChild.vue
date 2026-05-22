<script setup>
import { computed } from 'vue'
import contactlist from './data/ContactList'
const contacts = contactlist.contacts

const props = defineProps(['no'])
const user = computed(() => contacts.find((item) => item.no === Number(props.no)))
</script>

<template>
  <div>
    <h3>A05 ContactView</h3>
    <div>
      <table class="table">
        <tbody>
          <tr class="active">
            <td>일련번호</td>
            <td>{{ user?.no }}</td>
          </tr>
          <tr class="active">
            <td>이름</td>
            <td>{{ user?.name }}</td>
          </tr>
          <tr class="active">
            <td>전화</td>
            <td>{{ user?.tel }}</td>
          </tr>
          <tr class="active">
            <td>주소</td>
            <td>{{ user?.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!--
<script>
import contactlist from './data/ContactList';

export default {
  props: ['no'],
  data : function() {
    return {
      contacts : contactlist.contacts
    }
  },
  computed : {
    person() {
      return this.contacts.find(item => item.no === Number(this.no))
    },
  }
}
</script>
-->
