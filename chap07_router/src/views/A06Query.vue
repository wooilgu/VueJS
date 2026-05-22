<!-- eslint-disable no-unused-vars -->
<script setup>
import { useRoute } from 'vue-router'
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue'
import axios from 'axios'

import contactlist from './data/ContactList'
const contacts = contactlist.contacts

// 주소줄에 관련된 데이터 관리 객체
const route = useRoute()
console.log(route)

const user = computed(() => contacts.find((item) => item.no === Number(route.query.no)))
// console.log(user)

const contact = ref({ no: '', name: '', tel: '' })

const getContact = async (sno) => {
  try {
    const resp = await axios.get(`http://localhost:8000/contacts/${sno}`)
    contact.value = resp.data
  } catch (err) {
    console.error(err)
  }
}

// 이 컴포넌트가 최초 화면에 표시될때 1번만 실행된다
// onMounted(() => {
//   getContact(route.query.sno)
// });

// onMounted가 최초 1번만 발생되므로 해결책
const stopWatch = watch(
  () => route.query.sno,
  (newVal) => getContact(newVal),
  {
    immediate: true, // onMounted 대체 가능
  },
)

onBeforeUnmount(() => {
  stopWatch()
})
</script>

<template>
  <div>
    <h3>A03 Params</h3>

    <div class="mb-3">
      PATH: {{ decodeURIComponent(route.path) }} <br />
      FULL: {{ decodeURIComponent(route.fullPath) }}<br />
      HASH: {{ route.hash }} <br />
      No: {{ route.query.no }}<br />
      Name: {{ route.query.name }}<br />
      Person: {{ user.no }} / {{ user.name }}<br />
    </div>

    <div class="mb-3">
      NO: {{ contact.no }}<br />
      NAME: {{ contact.name }}<br />
      TEL: {{ contact.tel }}<br />
      ADDRESS: {{ contact.address }}<br />
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
