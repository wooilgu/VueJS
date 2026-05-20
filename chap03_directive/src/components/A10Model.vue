<script setup>
import { reactive } from 'vue';

const data = reactive({
  name: '',
  num: 0,
  address: '',
  text: '',
  gender: 'FIMALE',
  checkOne: true, // checkbox도 체크가 되어 있는 상태
  checkTwo: '동의',
  fruit: ['BANANA'],
  country: '',
  fourTeam: ['한화', '엘지'],
  person: {},
  comment: '',
});

// 조작할 변수가 아님 => 일반 변수
const countries = ['대한민국', '미국', '프랑스', '스페인', '독일', '필리핀', '포르투칼'];
const teams = ['한화', '롯데', 'NC', '기아', '삼성', '두산', '엘지', '넥센', 'SSG'];

const sendData = () => {
  // console.log(data);
  // 직렬화. JavaScript 객체 => JSON으로 변경
  // Client => Server로 값 전송시 사용
  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  // Server => Client (JSON => JavaScript 객체로 변경)
  const jsData = JSON.parse(jsonData);
  console.log(jsData);
};

const changeText = (evt, num) => {
  const value = evt.target.value.trim();
  if (value.length > num) evt.target.value = value.trim().slice(0, num);
  else data.text = value;
};
</script>

<template>
  <h3>A10 v-model</h3>

  <!-- 
    form은 submit이 발생하면 지정한 method 방식으로 지정한 action의 페이지에 값을 전달하는 
    자바스크립트가 포함되어 있다. 
  -->
  <form class="mb-5">
    <div class="mb-3">
      <label for="field1">Trim: {{ data.name }} / {{ data.name.length }}</label>
      <!-- v-model.trim => 입력된 값의 좌우 공백을 제거한 값을 반환한다 -->
      <input type="text" class="form-control" id="field1" v-model.trim="data.name" />
    </div>

    <div class="mb-3">
      <label for="field2">Number: {{ data.num + 1 }}</label>
      <!-- v-model.number => 입력된 값을 숫자 타입으로 변환 한 값을 반환한다 -->
      <input type="number" class="form-control" id="field2" v-model.number="data.num" />
    </div>

    <div class="mb-3">
      <label for="field3">Lazy: {{ data.address }}</label>
      <!-- v-model.lazy => 포커스(마우스 포인트)가 필드에서 벗어나는 순간 바인딩이 이루어진다
        이외의 효과는 개발자가 v-model을 이용해 정의 할 수 있다 
      -->
      <input type="text" class="form-control" id="field3" v-model.lazy="data.address" />
    </div>

    <div class="mb-3">
      <label for="field4">Event: {{ data.text }}</label>
      <!-- 
        v-model은 값 제어(가드)를 할 수 없음 => :value와 이벤트 핸들러를 이용해 v-model 처럼 구현
        v-bind:value="data.text" => 상태변수를 가져와 화면에 출력 (단방향 바인딩)
        @input="changeText" => 이벤트 핸들러로 v-bind의 value을 수정 (가드 추가 가능)
        => 상태 변경 => 화면 갱신 (결국 v-model과 동일한 효과를 얻을 수 있다 - React 방식)
      -->
      <input
        type="text"
        class="form-control"
        id="field4"
        v-bind:value="data.text"
        @input="(evt) => changeText(evt, 10)"
      />
    </div>

    <div class="mb-3">
      Radio Button: {{ data.gender }}
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="gender1"
          value="MALE"
          v-model="data.gender"
        />
        <label class="form-check-label" for="gender1">남성</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="gender2"
          value="FIMALE"
          v-model="data.gender"
        />
        <label class="form-check-label" for="gender2">여성</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="gender3"
          value="CHILD"
          v-model="data.gender"
        />
        <label class="form-check-label" for="gender3">어린이</label>
      </div>
    </div>

    <div class="mb-3">
      Single Check: {{ data.checkOne }} / {{ data.checkOne ? '동의' : '동의 안함' }}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="checkOne" v-model="data.checkOne" />
        <label class="form-check-label" for="checkOne">동의</label>
      </div>
    </div>

    <div class="mb-3">
      Single Check: {{ data.checkTwo }}
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkTwo"
          v-model="data.checkTwo"
          true-value="동의"
          false-value="동의 안함"
        />
        <label class="form-check-label" for="checkTwo">동의</label>
      </div>
    </div>

    <div class="mb-3">
      CheckBox: {{ data.fruit }}
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="fruit1"
          value="APPLE"
          v-model="data.fruit"
        />
        <label class="form-check-label" for="fruit1">사과</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="fruit2"
          value="BANANA"
          v-model="data.fruit"
        />
        <label class="form-check-label" for="fruit2">바나나</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="fruit3"
          value="MELON"
          v-model="data.fruit"
        />
        <label class="form-check-label" for="fruit3">멜론</label>
      </div>
    </div>

    <div class="mb-3">
      SelectBox:{{ data.country }}
      <select class="form-select" v-model="data.country">
        <option value="">선택해주세요</option>
        <option v-for="item in countries" :key="item">{{ item }}</option>
      </select>
    </div>

    <div class="mb-3">
      SelectBox Multi: {{ data.fourTeam }}
      <select class="form-select" multiple size="5" v-model="data.fourTeam">
        <option v-for="team in teams" :key="team">{{ team }}</option>
      </select>
    </div>

    <div class="mb-3">
      Comment: {{ data.comment }}
      <label for="comment" class="form-label"></label>
      <textarea class="form-control" id="comment" rows="3" v-model="data.comment"></textarea>
    </div>

    <div class="mb-3">
      Radio Button Object Value: {{ data.person }} / {{ data.person.name }}
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="person"
          id="person1"
          v-bind:value="{ name: '놀부', age: 30 }"
          v-model="data.person"
        />
        <label class="form-check-label" for="person1">놀부</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="person"
          id="person2"
          :value="{ name: '흥부', age: 31 }"
          v-model="data.person"
        />
        <label class="form-check-label" for="person2">흥부</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="person"
          id="person3"
          :value="{ name: '방자', age: 32 }"
          v-model="data.person"
        />
        <label class="form-check-label" for="person3">방자</label>
      </div>
    </div>

    <button type="submit" @click.prevent="sendData">SEND</button>
  </form>
</template>

<!--
<script>
export default {
  data() {
    return {
      // form 요소의 값이 단일값이면 기본형으로, 여러개 값이면 배열로 정의
      formData: {
        name: '',
        age: '',
        address: '',
        tel: '',
        gender: '여자',
        check: true,
        isChecked: '동의',
        fruit: ['banana'],
        language: '',
        four: ['한화', '롯데', 'NC'],
        commant: '',
        person: {},
      },
    };
  },
  computed: {
    langs: () => ['한국어', '영어', '불어', '독일어', '아랍어'],
    baseball: () => ['한화', '엘지', '삼성', '롯데', 'NC', 'SSC', '두산'],
  },
  methods: {
    sendData() {
      // console.log(this.formData);
      // Data 직렬화
      // JavaScript 객체 => JSON 객체로 변환
      const jsonData = JSON.stringify(this.formData);
      console.log(jsonData);

      // JSON 객체 => JavaScript 객체로 변환
      const jsData = JSON.parse(jsonData);
      console.log(jsData);
    },
    changeTel(evt) {
      if (evt.target.value.trim().length === 11) {
        this.formData.tel = evt.target.value.trim();
      }
    },
  },
};
</script>

<template>
  <h3>A10 Vue Form Element</h3>
  <br />

  <form class="mb-5">
    Name: <span class="orange">{{ formData.name }}</span> <br />
    <input type="text" class="form-control" v-model.trim="formData.name" /><br />

    Age: <span class="orange">{{ formData.age + 1 }}</span> <br />
    <input type="number" class="form-control" v-model.number="formData.age" /><br />

    Address: <span class="orange">{{ formData.address }}</span> <br />
    <input type="text" class="form-control" v-model.lazy="formData.address" /><br />

    Tel: <span class="orange">{{ formData.tel }}</span> <br />
    <input type="text" class="form-control" :value="formData.tel" @input="changeTel" /><br />

    Radio Button: <span class="orange">{{ formData.gender }}</span> <br />
    <input type="radio" name="gender" value="남자" v-model="formData.gender" />Male <br />
    <input type="radio" name="gender" value="여자" v-model="formData.gender" />Female <br />
    <input type="radio" name="gender" value="어린이" v-model="formData.gender" />Children <br />
    <br />

    Single Check: <span class="orange">{{ formData.check ? '동의' : '동의 안함' }}</span> <br />
    <input type="checkbox" name="check" v-model="formData.check" />Agree <br />
    <br />

    Single Check: <span class="orange">{{ formData.isChecked }}</span> <br />
    <input type="checkbox" name="check" v-model="formData.isChecked" true-value="동의" false-value="동의 안함" />Agree <br />
    <br />

    CheckBox: <span class="orange">{{ formData.fruit }}</span> <br />
    <input type="checkbox" value="apple" v-model="formData.fruit" />사과 <br />
    <input type="checkbox" value="banana" v-model="formData.fruit" />바나나 <br />
    <input type="checkbox" value="melon" v-model="formData.fruit" />멜론 <br />
    <br />

    SelectBox: <span class="orange">{{ formData.language }}</span> <br />
    <select class="form-control" v-model="formData.language">
      <option value="">선택해 주세요</option>
      <option v-for="item in langs" :key="item">{{ item }}</option>
    </select>
    <br />

    SelectBox Multi: <span class="orange">{{ formData.four }}</span
    ><br />
    <select class="form-control" multiple v-model="formData.four">
      <option v-for="item in baseball" :key="item">{{ item }}</option>
    </select>
    <br />

    TextArea: <span class="orange">{{ formData.commant }}</span>
    <textarea cols="50" rows="5" class="form-control" v-model="formData.commant"></textarea>
    <br />

    Radio Button Object Value: <span class="orange">{{ formData.person }} / {{ formData.person.name }}</span> <br />
    <input type="radio" name="person" v-bind:value="{ name: 'A', age: 1 }" v-model="formData.person" />놀부 <br />
    <input type="radio" name="person" :value="{ name: 'B', age: 2 }" v-model="formData.person" />흥부 <br />
    <input type="radio" name="person" :value="{ name: 'C', age: 3 }" v-model="formData.person" />방자 <br />
    <br />

    <button type="submit" @click.prevent="sendData">SEND</button>
  </form>
</template>

<style scoped>
  .orange {color: orange;}
</style>
-->
