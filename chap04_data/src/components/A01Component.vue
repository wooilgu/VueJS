<script setup>
import A01ChildComp from './children/A01ChildComp.vue';
</script>

<template>
  <h3>A01 Component</h3>

  <p>
    Vue is a framework and ecosystem that covers most of the common features needed in frontend
    development. But the web is extremely diverse - the things we build on the web may vary
    drastically in form and scale. With that in mind, Vue is designed to be flexible and
    incrementally adoptable. Depending on your use case, Vue can be used in different ways:<br />
  </p>

  <A01ChildComp></A01ChildComp>
</template>

<!--
<script>
import A01ChildComp from './children/A01ChildComp.vue'

export default {
  components: { A01ChildComp },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A01 Component</h3>

  <p>
    Vue is a framework and ecosystem that covers most of the common features needed in frontend development.
    But the web is extremely diverse - the things we build on the web may vary drastically in form and scale.
    With that in mind, Vue is designed to be flexible and incrementally adoptable.
    Depending on your use case, Vue can be used in different ways:<br>
  </p>

  <A01ChildComp></A01ChildComp>

  <div class="mb-5"></div>
</template>
-->
