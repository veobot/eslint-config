<template>
  <div>
    <p>The number of the day is {{ num }}</p>
    <p>{{ $t('Test key') }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from '../../../src/locales/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

const getNumber = (): number => 5;

export default Vue.extend({
  i18n,
  name: 'ComponentName',
  data: () => ({
    num: getNumber(),
  }),
});
</script>

<style scoped>
div {
  font-weight: bold;
}
</style>
