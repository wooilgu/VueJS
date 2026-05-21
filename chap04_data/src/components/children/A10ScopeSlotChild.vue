<script setup>
import { reactive, ref } from 'vue';

const kor = ref(80);
const eng = ref(90);
const user = reactive({
  name: 'Adam',
  age: 20,
  address: 'Seoul',
});

const changeKor = (num) => (kor.value = num);
</script>

<template>
  <h5>A10 Scoped Slot</h5>

  <div class="mb-3">자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.</div>

  <div>
    <input type="text" class="form-control" v-model.number="kor" />
    <input type="text" class="form-control" v-model.number="eng" />
    <button @click="() => changeKor(200)">KOR</button>
  </div>

  <div class="mb-5">
    <!-- slot props라 한다 -->
    <slot nick="Default" :kor="kor" :eng="eng" :user="user" :changeKor="changeKor"></slot>
    <slot
      name="jumsu"
      nick="Jumsu"
      :kor="kor"
      :eng="eng"
      :user="user"
      :changeKor="changeKor"
    ></slot>
  </div>
</template>

<!-- 
<script>
import A09ScopeSlotChild from './children/A09ScopeSlotChild.vue';

export default {
  components: { A09ScopeSlotChild },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-5">
    <A09ScopeSlotChild>
      <template v-slot:default="one">
        <div>
          Name: {{ one.nick }}<br />
          KOR: {{ one.kor }}<br />
          ENG: {{ one.eng }}<br />
          USER: {{ one.user.name }} / {{ one.user.age }}<br />
          <button @click="() => one.changeKor(3000)">KOR</button>
        </div>
      </template>

      <template v-slot:jumsu="one">
        <div>
          Name: {{ one.nick }}<br />
          KOR: {{ one.kor }}<br />
          ENG: {{ one.eng }}<br />
          USER: {{ one.user.name }} / {{ one.user.age }}<br />
          <button @click="() => one.changeKor(3000)">KOR</button>
        </div>
      </template>
    </A09ScopeSlotChild>
  </div>
</template>

-->
