<script setup>
import { useRoute } from 'vue-router';
import { computed, onUnmounted, ref, watch } from 'vue';
import axios from 'axios';

import contactlist from './data/ContactList';
const contacts = contactlist.contacts;

</script>

<template>
  <div>
    <h3>A03 Params</h3>

    <div class="mb-3">
      PATH: <br />
      FULL: <br />
      No: <br />
      Name: <br />
      Person: <br />
    </div>

    <div class="mb-3">
      NO: <br />
      NAME: <br />
      TEL: <br />
      ADDRESS: <br />
    </div>
  </div>
</template>

<!--
<script>
import axios from 'axios'

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
      return this.contacts.find(item => item.no === Number(this.$route.params.id))
    },
    // params로 넘어오는 값을 형변환 후 내부 읽기 전용 변수로 변환
    no() {
      return Number(this.$route.params.no)
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
  // View가 RouterView에 표시될때 1번만 실행된다. (즉 최초 1번만 실행됨)
  created: function(){
    // console.log(this.$route);
    this.getContact(this.no);
  },
}
</script>

<template>
  <div>
    <h3>A03 Params</h3>

    <div>
      Name: {{ $route.params.name }}<br>
      ID: {{ $route.params.id }}<br>
      Person: {{ person.no }} / {{ person.name }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.tel }}<br />
    </div>
  </div>
</template>
-->