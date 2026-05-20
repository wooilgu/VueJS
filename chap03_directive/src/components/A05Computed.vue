<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed, isRef, reactive, ref } from 'vue';

const data = reactive({ name: '', address: '', num: 0 });

// method
const onAdd = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`;

// Event Handler
const changeString = (evt, num) => {
  // console.log(evt);
  // console.log(evt.target);        // 이벤트가 발생된 요소
  // console.log(evt.target.name);
  const value = evt.target.value.trim();
  if (value.length > num) evt.target.value = value.slice(0, num);
  else data[evt.target.name] = value;
};
const changeNumber = (evt) => {
  let value = Number(evt.target.value.trim());
  if (Number.isNaN(value)) value = 0;
  data[evt.target.name] = value;
};

/*
    계산된 속성이라한다. 기존의 data에 변수를 이용해서 새로운 값을 산출하는 경우 사용
    작성은 메서드 방식. 사용은 getter (속성) 방식으로 이용
    함수 내부에서 사용된 상태 변수, 메서드가 변경된 경우만 새롭게 호출된다(메모이제이션)
  
    함수가 View에서 사용되는 경우. 매개변수가 없고 리턴값이 있는 경우
    함수 내부에서 사용하는 상태변수가 변경되는 경우만 재 호출된다
  */
const animal = ref(['강아지', '고양이']);
const addAnimal = () => animal.value.push('열대어');
const animalValue = computed(() => {
  console.log('animal이 변경됨...');
  return animal.value.length * 100;
});

const product = reactive({
  name: 'TV',
  price: 20000,
  quantity: 1,
  discountRate: 0.1,
});

// computed의 결과값은 ref로 정의된 상태변수로 반환된다
const totalPrice = computed(() => product.price * product.quantity);
// console.log(isRef(totalPrice));     // true

// totalPrice 함수가 computed 즉 ref 변수다. 따라서 참조는 value를 붙여 사용한다
const discountPrice = computed(() => totalPrice.value * (1 - product.discountRate));
</script>

<template>
  <h3 class="mb-3">A05 Method / Computed</h3>

  <div class="mb-5">
    <h5>1. Method</h5>

    <div class="mb-3">onAdd: {{ onAdd(10, 20) }}</div>

    <div class="mb-2">
      <label for="name" class="form-label">Name: {{ data.name }}</label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        v-bind:value="data.name"
        @input="changeString($event, 5)"
      />
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">Address: {{ data.address }}</label>
      <input
        type="text"
        id="address"
        name="address"
        class="form-control"
        v-bind:value="data.address"
        @input="changeString($event, 10)"
      />
    </div>

    <div class="mb-3">
      <label for="num" class="form-label">Num: {{ data.num }}</label>
      <input
        type="text"
        id="num"
        name="num"
        class="form-control"
        :value="data.num"
        @input="changeNumber($event)"
      />
    </div>
  </div>

  <div class="mb-5">
    <h5>2. Computed</h5>

    <div class="mb-3">
      {{ animal[0] }} / {{ animal[1] }} / {{ animal[2] }} / {{ animal.length }} / {{ animalValue
      }}<br />
      <button class="btn btn-primary btn-sm" @click="addAnimal">ADD</button>
    </div>

    <div class="mb-2 input-group">
      <span class="input-group-text">PRICE</span>
      <input type="number" class="form-control" name="price" v-model="product.price" />

      <span class="input-group-text">Quantity</span>
      <input type="number" class="form-control" name="quantity" v-model="product.quantity" />

      <span class="input-group-text">TAX</span>
      <input
        type="number"
        class="form-control"
        name="tax"
        step="0.1"
        v-model="product.discountRate"
      />
    </div>

    <div class="mb-3">
      Total: {{ product.quantity * product.price }} <br />
      Total: {{ totalPrice }} <br />
      Discount: {{ discountPrice }}
    </div>
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {
      name: 'NolBu',
      address: 'Seoul',
      num: 10,
      // tel: '010-0000-0000',    // 변경되지 않을 변수 => computed로 이동
    };
  },
  methods: {
    changeString(evt) {
      // console.log(evt.target);
      // console.log(evt.target.name, evt.target.value);
      this[evt.target.name] = evt.target.value;
    },
    changeNumber(evt) {
      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = 0;
      this[evt.target.name] = value;
    },
    onAdd(x = 0, y = 0) {
      return `${x} + ${y} = ${x + y}`;
    },
    getTotalMethod() {
      console.log('method.....');
      let total = 0;
      for (let i = 1; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
  },
  computed: {
    getTotalComp() {
      console.log('computed.....');
      let total = 0;
      for (let i = 1; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
    tel: () => '010-0000-0000',
  },
};
</script>

<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: {{ onAdd(10, 20) }}<br />
    Tel: {{ tel }}<br />
    <br />

    Name: {{ name }}
    <input type="text" name="name" class="form-control" :value="name" @input="changeString" />
    Address: {{ address }}
    <input type="text" name="address" class="form-control" :value="address" @input="changeString" />
    Num: {{ num + 1 }}
    <input type="number" name="num" class="form-control" :value="num" @input="changeNumber($event)" />
  </div>
  <br />

  <div class="mb-5">
    <h5>2. Computed</h5>
    Methods: {{ getTotalMethod() }} <br />
    Computed: {{ getTotalComp }} <br />
  </div>
</template>
-->
