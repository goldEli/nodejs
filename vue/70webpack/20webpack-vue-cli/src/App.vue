<template>
  <div>
    hello world
  </div>
</template>
<script>
export default {
  setup() {
    const testFunction = () => {
      console.log("123!!!");
    };
    return {
      testFunction,
    };
  },
};
</script>
<style>
div {
  color: yellowgreen;
}
</style>
