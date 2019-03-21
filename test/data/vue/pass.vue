<template>
  <p>The number of the day is {{ num }}</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ComponentName',
  data: () => ({
    num: 5,
  }),
});
</script>

<style scoped>
div {
  font-weight: bold;
}
</style>
