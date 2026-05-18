<script setup>
import contactlist from './data/ContactList';
const contacts = contactlist.contacts;
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div class="mb-3">
      ID: <br />
      Name: <br>
      No: <br>
      Person: <br>
      Hash: 
    </div>

    <div class="mb-3">
      NO: <br />
      NAME: <br>
      TEL: <br>
      ADDRESS: <br>
    </div>
  </div>
</template>

<!--
<script>
import axios from 'axios';
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.$route.query.id))
    },
    // query로 넘어오는 값을 형변환 후 내부 읽기 전용 변수로 변환
    no() {
      return Number(this.$route.query.no)
    },
    id() {
      return Number(this.$route.query.id)
    }
  },
  watch: {
    no(newVal) {
      this.getContact(newVal)
    }
  },
  methods: {
    async getContact(no) {
      try {
        const resp = await axios.get('http://localhost:8000/contacts/' + no);
        this.contact = resp.data;
      }catch(err) {
        console.error(err)
      }
    }
  },
  created: function(){
    // console.log(this.$route);
    this.getContact(this.no);
  },
}
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: {{ $route.query.name }}<br>
      ID: {{ $route.query.id }}<br>
      HASH: {{ $route.hash }}<br />
      <br />

      Person: {{ person.no }} / {{ person.name }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.tel }}<br />
    </div>
  </div>
</template>
-->