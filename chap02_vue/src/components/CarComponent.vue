<script setup>
import { ref } from 'vue';
const car  = ref('차량 관리');
const changeCar = () => car.value = '수정된 차량 관리';
</script>



<template>
      <p>
      <h3> {{ car }}</h3>
      ROS2의 핵심 통신 아키텍처를 이해하고 직접 노드 프로그래밍을 구현할 수 있다. <br>
      URDF를 이용해 주행 로봇을 모델링하고 Gazebo 시뮬레이션 환경에 성공적으로 연동할 수 있다. <br>
      가상 환경의 센서(LiDAR 등) 데이터를 수집/처리하여 장애물 회피 등 기본 주행 알고리즘을 작성하고 시뮬레이션 상에서 구동할 수 있다.
    </p>
    <button @click ="changeCar()"> Car </button>
  </template>