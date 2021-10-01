<template>
  <v-alert
    align="left"
    :color="type === 'success' ? 'green' : 'red'"
    dense
    outlined
    prominent
    text
    :type="type"
    class="mx-16"
    >{{ feedbackMessage }}
  </v-alert></template
>

<script>
export default {
  props: {
    feedbackMessage: String,
    type: String,
  },
};
</script>
