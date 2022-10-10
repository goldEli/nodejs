<template>
  <ul>
    <li v-bind:key="v.id" v-for="v in list">{{v.text}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>