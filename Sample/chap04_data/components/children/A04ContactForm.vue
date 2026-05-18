<script setup>

</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">Submit</button>
      </div>
    </div>  
  </form>
</template>

<!-- 
<script>
export default {
  emits: ['searchEvent'],
  methods: {
    sendKeyword() {
      const value = this.$refs.searchRef.value.trim()
      if (value.length >= 2) {
        this.$emit('searchEvent', value)
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="searchRef" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendKeyword">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
-->
