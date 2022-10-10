<template>
  <div>
    <div>
      <button @click="changeTab(index)" v-for="(title, index) in titles" :key="index">{{title}}</button>
    </div>
    <div>
      <keep-alive>
        <component :is="Com"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import MyClothes from "./MyClothes.vue";
import MyShoes from "./MyShoes.vue";
import MyBags from "./MyBags.vue";
export default {
  data: function() {
    return {
      titles: ["衣服", "鞋子", "包包"],
      Com: MyClothes
    };
  },
  methods: {
    changeTab: function(index) {
      switch (index) {
        case 0:
          this.Com = MyClothes;
          break;
        case 1:
          this.Com = MyShoes;
          break;
        case 2:
          this.Com = MyBags;
          break;

        default:
          break;
      }
    }
  },
  components: {
    MyClothes,
    MyShoes,
    MyBags
  }
};
</script>