<script setup>
import { onActivated, onDeactivated, ref, shallowRef } from 'vue'

// options API 기반으로 정의 할 목적
defineOptions({
  name: 'aboutComp',
  components: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
})

const today = ref(new Date())
const now = shallowRef(new Date())

onActivated(() => {
  console.log('----- onActivated -----')
  now.value = new Date()
})
onDeactivated(() => {
  console.log('----- onDeactivated -----')
})
</script>

<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>
      Vue is a framework and ecosystem that covers most of the common features needed in frontend
      development. But the web is extremely diverse - the things we build on the web may vary
      drastically in form and scale. With that in mind, Vue is designed to be flexible and
      incrementally adoptable. Depending on your use case, Vue can be used in different ways:<br />
      <br />

      Today: {{ today.toLocaleString() }}<br />
      Now: {{ now.toLocaleString() }}<br />
    </p>
  </div>
</template>

<!--
<script>
export default {
  name: 'aboutComp',
  data() {
    return {
      today: new Date(),
      now: new Date(),
    }
  },
  // 활성화시 실행되는 라이프 사이클 메서드
  activated() {
    // console.log('activated');
    this.now = new Date();
  },
  deactivated() {
    // console.log('deactivated');
  }
}
</script>

<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
      <br>

      Today: {{today.toLocaleString()}}<br />
      Now: {{ now.toLocaleString() }}
    </p>
  </div>
</template>
-->
