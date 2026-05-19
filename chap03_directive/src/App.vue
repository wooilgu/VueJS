
<!-- eslint-disable no-unused-vars -->
<script setup>
import IconOne from './components/icons/IconCommunity.vue';

import A01Ref from './components/A01Ref.vue'
import A02Reactive from './components/A02Reactive.vue'
import A03Attribute from './components/A03Attribute.vue'
import A04MakeDOM from './components/A04MakeDOM.vue'
import A05Computed from './components/A05Computed.vue'

</script>

<template>
  <div class="m-3">
    <h1>
      <IconOne />
      A05Computed
    </h1>

    <div>
      <A05Computed></A05Computed>
      <A04MakeDOM></A04MakeDOM>
      <A03Attribute></A03Attribute>
      <A02Reactive></A02Reactive>
      <A01Ref></A01Ref>
    </div>
  </div>
</template>

