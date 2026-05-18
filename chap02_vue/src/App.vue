<script setup>
import { ref } from 'vue';


//image 참조
import two from '/images/two.png';

//조각 View (component)를 import
//사용하는 곳에서는 사용자 정의 태크 형태로 사용한다. - 반드시 종료 태그도 존재해야 한다.
import CarComp from './components/CarComponent.vue';

//상태변수가 아닌 일반변수 - vue가 값이 변경되도 화면 변경 작업을 해 주지 않음(값은 변경됨)
let name = 'Adam';
const changeName = function(x) {
  name = x;
}

// ref로 선언한 상태변수 vue가 관리하는 상태변수 - script 내부에서는 "변수명.value"
const age = ref(20);
const changeAge = x => age.value = x;

</script>

<template>
 <div class="m-3">
  <h1 class="orange">chap02 Vue</h1>

  <p>
    리소스로 관리되는 이미지 <br>
    <img src="./assets/images/four.png" alt="four" width="100">
    <img src="./assets/vite.svg" alt="vite" width="100">
    <br>

    정적파일 <br>
    <img src="/images/one.png" alt="one" width="100">
    <img v-bind:src="two" alt="one" width="100">
    <img src="/favicon.svg" alt="favicon" width="100">
  </p>

  <!-- 사용자 정의 컴포넌트 (조각 view - 컴포넌트) -->
  <CarComp>
  </CarComp>

  <p>
    Name: {{ name }} <br>
    Age: {{ age }} <br>

    <button v-on:click ="changeName('홍길동')"> Name </button>
    <button v-on:click ="changeAge(5000)"> Age </button>
  </p>



    <p>
      ROS2 기반 주행 로봇 SW 개발 및 제어 기술을 습득하고자 하는 IT 실무자 및 개발자 <br>
      물리적 로봇 도입 전, 시뮬레이션(Gazebo) 환경을 구축하고 테스트해야 하는 엔지니어 <br>
      자율주행 로봇 제어 알고리즘 및 센서 데이터 처리 실무에 관심 있는 연구원
    </p>
    
    <!-- 사용자 정의 컴포넌트  -->
    <CarComp />


 </div>
</template>
