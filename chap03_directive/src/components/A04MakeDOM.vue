<script setup>
import { ref } from 'vue';

const students = [
  { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
  { name: 'NolBu', age: 50, kor: 90, eng: 90 },
  { name: 'HungBu', age: 40, kor: 70, eng: 60 },
];
const items = [
  { id: 0, name: 'NolBu', age: 40 },
  { id: 1, name: 'HungBu', age: 30 },
  { id: 2, name: 'HangDan', age: 20 },
];
const mySet = new Set(['React', 'Vue', 'Angular', 'Vue', 'React']);
const myMap = new Map([
  ['one', 10],
  ['two', 20],
]);

const check = ref(true);
const name = ref('one');
</script>

<template>
  <h3 class="mb-3">A04 DOM Directive</h3>

  <div class="mb-3">
    <h5>1. v-show</h5>
    <div class="box" v-show="check">
      표시 / 숨김을 반복적으로 할 목적. DOM은 남아 있음(CSS)<br />
      v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다.<br />
      v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
    </div>
  </div>

  <div class="mb-3">
    <div class="box" v-if="name === 'one'">
      <h5>2-1. v-if</h5>
      표시 / 숨김을 반복적으로 표시 할 목적(v-show와 동일)과 조건에 맞는 View만을 표시할 목적.<br />
      DOM에서 완전히 삭제된다 - CSS가 적용되어 있는 경우 디자인 깨짐에 주의<br />

      Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
    </div>
    <!-- <br> => 다른 요소가 중간에 오면 에러 발생 -->
    <div class="box" v-else-if="name === 'two'">
      <h5>2-2. v-else-if</h5>
      v-else-if와 v-else 사이에 다른 태그가 끼어 있으면 에러 발생. 항상 근접 태그로 기술 할 필요가
      있다<br />
      v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다.<br />
      또한 여러 개를 사용할 수 있습니다.
    </div>
    <div class="box" v-else>
      <h5>2-3. v-else</h5>
      v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다
    </div>
  </div>

  <div class="mb-5">
    <button class="btn btn-outline-primary btn-sm" @click="check = !check">Check</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'one'">IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'two'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'three'">Else</button><br />
  </div>

  <div class="mb-3">
    <h5>3. v-for</h5>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Kor</th>
          <th>Eng</th>
        </tr>
      </thead>
      <tbody>
        <!--
            for(let idx = 0; idx < students.length; idx++) {
              const item = students[idx];
          -->
        <tr v-for="(item, idx) in students" v-bind:key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.kor }}</td>
          <td>{{ item.eng }}</td>
        </tr>
        <!--
            }
          -->
      </tbody>
    </table>
  </div>

  <div class="mb-3">
    <h5>4. v-for & v-if</h5>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Kor</th>
          <th>Eng</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for와 v-if를 동시에 기술하면 v-if가 먼저 실행된다. 따라서 분리해야 한다
            template tag는 빌드시 삭제된다
          -->
        <template v-for="(item, idx) in students" v-bind:key="idx">
          <tr v-if="item.kor >= 90">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.kor }}</td>
            <td>{{ item.eng }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

  <div class="mb-3">
    <h5>5. v-for</h5>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mb-3">
    <!-- 객체 순환 - value, key, index 3개의 값을 받는다 -->
    <div class="form-check" v-for="(value, key, idx) in students[0]" :key="key">
      <input class="form-check-input" type="radio" name="object" id="sample1" />
      <label class="form-check-label" for="sample1"> {{ idx }} / {{ key }} / {{ value }} </label>
    </div>
  </div>

  <div class="mb-3">
    <!-- Set 순환 - value, index 값을 받는다 -->
    <div class="form-check" v-for="(value, idx) in mySet" :key="value">
      <input class="form-check-input" type="radio" name="set" :id="`set${idx}`" />
      <label class="form-check-label" :for="`set${idx}`"> {{ idx }} / {{ value }} </label>
    </div>
  </div>

  <div class="mb-3">
    <!-- Map 순환 - value, index 값을 받는다
        const [x, y] = [10, 11]; 
        const { name, age } = { name: 'ABC', age: 20 };
      -->
    <div class="form-check" v-for="([key, value], idx) in myMap" :key="key">
      <input class="form-check-input" type="radio" name="map" :id="`map${idx}`" />
      <label class="form-check-label" :for="`map${idx}`">
        {{ idx }} / {{ key }} / {{ value }}
      </label>
    </div>
  </div>

  <div class="mb-3">
    <!-- 일련 번호 - 값은 1부터 시작한다  - value, index 값을 받는다 -->
    <div class="form-check" v-for="(value, idx) in 3" :key="value">
      <input class="form-check-input" type="radio" name="range" :id="`range${idx}`" />
      <label class="form-check-label" :for="`range${idx}`"> {{ idx }} / {{ value }} </label>
    </div>
  </div>

  <div class="mb-3">
    <!-- 문자열 순환 - value, index 값을 받는다 -->
    <div class="form-check" v-for="(value, idx) in 'Hello'" :key="idx">
      <input class="form-check-input" type="radio" name="str" :id="`str${idx}`" />
      <label class="form-check-label" :for="`str${idx}`"> {{ idx }} / {{ value }} </label>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 10px;
}
</style>

<!--
<script>
const data = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'HongGilDong', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ],
  items: [
    { id: 0, name: 'NolBu', age: 40 },
    { id: 1, name: 'HungBu', age: 30 },
    { id: 2, name: 'HangDan', age: 20 },
  ],
};

export default {
  data() {
    return {
      data,
      check: true,
      name: 'one',
    };
  },
};
</script>

<template>
  <h3>A04 DOM Directive</h3>

  <div class="mb-3">
    <h5>1. v-show</h5>
    <div v-show="check">
      표시 / 숨김을 반복적으로 할 목적. DOM은 남아 있음(CSS)<br />
      v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다.<br />
      v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
    </div>
  </div>

  <div class="mb-3">
    <h5>2. v-if</h5>
    <div v-if="name === 'one'">
      표시 / 숨김을 반복적으로 표시 할 목적(v-show와 동일)과 조건에 맞는 View만을 표시할 목적.<br />
      DOM에서 완전히 삭제된다 - CSS가 적용되어 있는 경우 디자인 깨짐에 주의<br />

      Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
    </div>
    <div v-else-if="name === 'two'">
      v-else-if와 v-else 사이에 다른 태그가 끼어 있으면 에러 발생<br />
      항상 근접 태그로 기술 할 필요가 있다<br />

      v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다.<br />
      또한 여러 개를 사용할 수 있습니다.
    </div>
    <div v-else>v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다.</div>
  </div>

  <div class="mb-3">
    <h5>3. v-for</h5>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Kor</th>
          <th>Eng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data.students" v-bind:key="idx">
          <td>{{ idx }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.kor }}</td>
          <td>{{ item.eng }}</td>
        </tr>
      </tbody>

      <tbody>
        <template v-for="(item, idx) in data.students" v-bind:key="idx">
          <tr v-if="item.kor >= 90">
            <td>{{ idx }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.kor }}</td>
            <td>{{ item.eng }}</td>
          </tr>
        </template>
      </tbody>
    </table>

    <ul>
      <li v-for="item of data.items" :key="item.id">{{ item.id }} / {{ item.name }} / {{ item.age }}</li>
    </ul>

    <ul>
      <li v-for="(value, key, idx) in data.students[0]" :key="key">{{ idx }} / {{ key }} / {{ value }}</li>
    </ul>

    <ul>
      <li v-for="(item, idx) in 3" :key="item">{{ idx }} / {{ item }}</li>
    </ul>
  </div>

  <div class="mb-5">
    <button class="btn btn-outline-primary btn-sm" v-on:click="check = !check">Check</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'one'">IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'two'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'three'">Else</button><br />
  </div>
</template>

-->
