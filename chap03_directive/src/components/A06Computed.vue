<script setup>
import { computed, ref } from 'vue';

const countries = [
  { no: 1, name: '미국', capital: '워싱턴DC', region: 'america' },
  { no: 2, name: '프랑스', capital: '파리', region: 'europe' },
  { no: 3, name: '영국', capital: '런던', region: 'europe' },
  { no: 4, name: '중국', capital: '베이징', region: 'asia' },
  { no: 5, name: '태국', capital: '방콕', region: 'asia' },
  { no: 6, name: '모로코', capital: '라바트', region: 'africa' },
  { no: 7, name: '라오스', capital: '비엔티안', region: 'asia' },
  { no: 8, name: '베트남', capital: '하노이', region: 'asia' },
  { no: 9, name: '피지', capital: '수바', region: 'oceania' },
  { no: 10, name: '솔로몬 제도', capital: '호니아라', region: 'oceania' },
  { no: 11, name: '자메이카', capital: '킹스턴', region: 'america' },
  { no: 12, name: '나미비아', capital: '빈트후크', region: 'africa' },
  { no: 13, name: '동티모르', capital: '딜리', region: 'asia' },
  { no: 14, name: '멕시코', capital: '멕시코시티', region: 'america' },
  { no: 15, name: '베네수엘라', capital: '카라카스', region: 'america' },
  { no: 16, name: '서사모아', capital: '아피아', region: 'oceania' },
];

const keyword = ref('');

// dom 요소와 연결
// <input ... ref="inputElem"> 형태로 연결
const inputElem = ref(null);

// keyword는 사용자가 검색어 입력 => keyword 상태변수 변경 => computed 함수 내부에셔
// keyword 상태변수 사용중 => 함수로써 호출
const searchData = computed(() => {
  const newArr = countries.filter((item) => {
    if (item.name.includes(keyword.value)) return true;
    else return false;
  });

  return newArr;
});

const changeKeyword = () => {
  console.log(inputElem.value);
  keyword.value = inputElem.value.value.trim();
  // keyword.value = document.querySelector('input[name="search"]').value.trim();
};
</script>

<template>
  <h3>A06 Computed</h3>

  <div class="input-group">
    <input type="text" name="search" class="form-control" ref="inputElem" />
    <div class="input-group-append">
      <button class="btn btn-primary" @click="changeKeyword()">SEARCH</button>
    </div>
  </div>
  <br />

  <table class="table mb-5">
    <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in searchData" :key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.capital }}</td>
        <td>{{ item.region }}</td>
      </tr>
    </tbody>
  </table>
</template>

<!-- 
<script>
const data = {
  countryname: '',
  countries: [
    { no: 1, name: '미국', capital: '워싱턴DC', region: 'america' },
    { no: 2, name: '프랑스', capital: '파리', region: 'europe' },
    { no: 3, name: '영국', capital: '런던', region: 'europe' },
    { no: 4, name: '중국', capital: '베이징', region: 'asia' },
    { no: 5, name: '태국', capital: '방콕', region: 'asia' },
    { no: 6, name: '모로코', capital: '라바트', region: 'africa' },
    { no: 7, name: '라오스', capital: '비엔티안', region: 'asia' },
    { no: 8, name: '베트남', capital: '하노이', region: 'asia' },
    { no: 9, name: '피지', capital: '수바', region: 'oceania' },
    { no: 10, name: '솔로몬 제도', capital: '호니아라', region: 'oceania' },
    { no: 11, name: '자메이카', capital: '킹스턴', region: 'america' },
    { no: 12, name: '나미비아', capital: '빈트후크', region: 'africa' },
    { no: 13, name: '동티모르', capital: '딜리', region: 'asia' },
    { no: 14, name: '멕시코', capital: '멕시코시티', region: 'america' },
    { no: 15, name: '베네수엘라', capital: '카라카스', region: 'america' },
    { no: 16, name: '서사모아', capital: '아피아', region: 'oceania' },
  ],
};
export default {
  data() {
    return {
      countryname: data.countryname,
      countries: data.countries,
    };
  },
  computed: {
    searchCountry() {
      // filter => 조건체크 => return true면 searchData에 해당값 반환
      // filter => 조건체크 => return false면 skip

      // arrow 함수는 this가 없다. 상위 객체의 this를 자신의 this로 사용
      const searchData = this.countries.filter(item => {
        // console.log(this);   // 중첩함수의 this는 window => strict mode에서는 undefined
        // method 내부에서 콜백함수를 호출하는 메서드를 사용하는 경우 반드시 Arrow 함수로 정의

        // includes(ES2015)는 빈문자인 경우는 모두 매칭된단
        if (item.name.includes(this.countryname)) return true;
        else return false;
      });
      return searchData;
    },
  },
  methods: {
    changeCountryName() {
      // this.countryname = document.querySelector('input[name="search"]').value.trim();
      this.countryname = this.$refs.searchRef.value.trim();
      // console.log(this.$refs);
      // document.querySelector('input[name="search"]') => this.$refs.searchRef
    },
  },
};
</script>

<template>
  <h3>A06 Computed</h3>

  <div class="input-group">
    <input type="text" name="search" class="form-control" ref="searchRef" />
    <div class="input-group-append">
      <button class="btn btn-primary" @click="changeCountryName">SEARCH</button>
    </div>
  </div>
  <br />

  <table class="table mb-5">
    <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in searchCountry" :key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.capital }}</td>
        <td>{{ item.region }}</td>
      </tr>
    </tbody>
  </table>
</template>
-->
