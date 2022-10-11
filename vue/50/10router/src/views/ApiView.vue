<template>
  <div>
    <h1>这是api</h1>
    <p>id: {{id}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    id: function() {
      return this.$route.query.id;
    }
  }
};
</script>