<script setup>
import { computed } from 'vue';

const props = defineProps([
  'today',
  'name',
  'age',
  'check',
  'isChecked',
  'add',
  'arr',
  'user',
  'onAdd',
]);

const dateOrTime = computed(() => {
  const now = new Date();
  switch (props.today) {
    case 'date':
      return now.toLocaleDateString();
    case 'time':
      return now.toLocaleTimeString();
    default:
      return now.toLocaleString();
  }
});
</script>

<template>
  <div>
    <h5>A02 Props Two Component</h5>

    <div class="mb-5">
      Type / {{ today }}: {{ dateOrTime }}<br />
      <!--
        널리쉬 연산자 => ??
        ?? 앞의 값이 undefined, null 이면 ?? 뒤의 값을 사용한다
      -->
      Name: {{ name ?? 'UNKNOWN' }} <br />
      Age: {{ age ?? 0 }} <br />
      Check: {{ check }}<br />
      isChecked: {{ (isChecked ?? true) ? '동의' : '동의 안함' }} <br />
      Address: {{ add }} <br />
      <!-- {{ undefined[0] }} / {{ undefined.name }} / {{ undefined(10, 20) }}<br />
        옵셔널 체이닝 연산자 => ?.
        [index], .속성, ()로 참조하는 경우 ?. 앞이 undefined, null 이면 ?. 뒤를 평가하지 않고  
        undefined, null을 반환하고 종료된다 = undefined, null은 화면에 출력 안됨 
      -->
      Array: {{ arr?.[0] ?? 100 }} / {{ arr?.[1] }} / {{ arr?.[2] }}<br />
      User: {{ user?.name }} / {{ user?.age }} / {{ user?.address }} <br />
      onAdd: {{ onAdd?.(20, 30) }} <br />
    </div>

    <div class="mb-3">
      <button class="btn btn-danger">ADDRESS</button>
    </div>
  </div>
</template>

<!-- 
<script>
export default {
  props: ['type', 'name', 'age', 'add', 'arr', 'user', 'onAdd', 'changeAddress'],
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A02 Props Child TWO</h5>

  <div class="mb-5">
    Today: {{ this.type }}<br />
    Name: {{ name }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('인천')">Address</button>
  </div>
</template>

-->
