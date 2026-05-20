<!-- eslint-disable no-unused-vars -->
<script setup>
import IconOne from './components/icons/IconCommunity.vue';

import A01Ref from './components/A01Ref.vue';
import A02Reactive from './components/A02Reactive.vue';
import A03Attribute from './components/A03Attribute.vue';
import A04MakeDOM from './components/A04MakeDOM.vue';
import A05Computed from './components/A05Computed.vue';
import A06Computed from './components/A06Computed.vue';
import A07Watch from './components/A07Watch.vue';
import A07WatchFetch from './components/A07WatchFetch.vue';
import A08LifeCycle from './components/A08LifeCycle.vue';
import A09Event from './components/A09Event.vue';
import A10Model from './components/A10Model.vue';
import A11RefElem from './components/A11RefElem.vue';
import A12StyleClass from './components/A12StyleClass.vue';
import A13ClassModule from './components/A13ClassModule.vue';
</script>

<template>
  <div class="m-3">
    <h1>
      <IconOne />
      A12StyleClass Model
    </h1>

    <div>
      <A13ClassModule></A13ClassModule>
      <A12StyleClass></A12StyleClass>
      <A11RefElem></A11RefElem>
      <A10Model></A10Model>
      <A09Event></A09Event>
      <A08LifeCycle></A08LifeCycle>
      <A07WatchFetch></A07WatchFetch>
      <A07Watch></A07Watch>
      <A06Computed></A06Computed>
      <A05Computed></A05Computed>
      <A04MakeDOM></A04MakeDOM>
      <A03Attribute></A03Attribute>
      <A02Reactive></A02Reactive>
      <A01Ref></A01Ref>
    </div>
  </div>
</template>
