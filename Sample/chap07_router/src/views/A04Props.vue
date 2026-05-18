<script setup>
import { shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

import contactlist from './data/ContactList';

const contacts = contactlist.contacts;
const contact = shallowRef({ no: '', name: '', tel: '', address: '', photo: '' });

// 컴포넌트는 그대로인데 주소창의 파라미터만 바뀔 때 실행.
</script>

<template>
  <div>
    <h3>A04 Props</h3>

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
  props: ['id', 'name', 'no'],
  data() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.id))
    },
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
    this.getContact(this.no);
  },
}
</script>

<template>
  <div>
    <h3>A04 Props</h3>

    <div>
      Name: {{ name }} <br>
      No: {{ no }} / {{ id }}<br>
      Person: {{ person.no }} / {{ person.name }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.tel }}<br />
    </div>
  </div>
</template>
-->