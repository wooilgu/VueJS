<script setup>
// 변수의 값이 변경되면 변경된 값을 기반으로 화면을 재 갱신하는 변수 => 상태변수
// 이 상태변수는 값이 변경되면 즉각 변경된 값 기반으로 화면을 재 구성한다
// template에서는 "변수명"으로 참조
// setup에서는 "변수명.value"로 참조

</script>

<template>
  <h3>A01 상태변수 - Ref</h3>

  <div class="mb-3">
    <div class="mb-2">
      Nickname:
    </div>

    <p>
      Name: <br />
      Age: <br />
      Check: <br />
      Array: <br />
      User: <br />
    </p>
  </div>

  <div class="mb-5">
    <button>NICKNAME</button>
    <button>NAME</button>
    <button>AGE</button>
    <button>CHECK</button>

    <button>ADD ARRAY</button>
    <button>UPDATE ARRAY</button>
    <button>DELETE ARRAY</button>

    <button>ADD USER</button>
    <button>UPDATE USER</button>
    <button>DELETE USER</button>
  </div>
</template>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>
