<script setup>
import A03EmitChild from './children/A03EmitChild.vue';
</script>

<template>
  <h3>A03 Emits</h3>  

  <div class="mb-3">
    Number: <br>

    <!-- 
      data는 객체. 객체의 속성값이 없으면 에러가 아닌 undefined. vue는 null과 undefined는 화면 출력 안함 
    -->
    Number: <br>
    Name: <br />

    <!-- 
      data 객체는 존재. arr 객체는 존재 안함. 없는 객체(undefined)에 
      undefined[0], undefined.name, undefined() 형태로는 사용할 수 없다
    -->
    Array: <br />
    User: <br>
    <button>NUM</button>
    <button>USER</button>
  </div>

  <hr>

  <div class="mb-5">
    <A03EmitChild></A03EmitChild>
  </div>
</template>

<!-- 
<script>
import A03EmitChild from './children/A03EmitChild.vue'

export default {
  components: { A03EmitChild },
  data() {
    return {
      num: '',
      data: { num: '', address: '', arr: [], user: {} },
    }
  },
  methods: {
    getNumber(evt) {
      // console.log(evt);
      this.num = evt
    },
    getData(evt) {
      // console.log(evt)
      this.data = evt
    },
  },
}
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: {{ num }} <br />
    Number: {{ data.num }}<br />
    Name: {{ data.name }}<br />
    Array: {{ data.arr?.[0] }} / {{ data.arr[1] }} / {{ data.arr?.[2] }}<br />
    User: {{ data.user?.name }} / {{ data.user.age }} / {{ data.user?.address }}<br />
  </div>

  <hr />

  <div class="mb-5">
    <A03EmitChild @numEvent="getNumber" @objEvent="getData"></A03EmitChild>
  </div>
</template>
-->
