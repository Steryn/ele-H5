<template>
<header>
  <div class="header-content">
    <svg class="headerInfo-3RbCQ_0"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use></svg>
    <svg class="headerInfo-Rm0Tf_0"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use></svg>
  </div>
</header>
</template>

<script>
import gender from "../common.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    onload:function(){
      console.log(gender)
    }
  },
  mounted(){
    this.onload();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-content{
  height: 9.2vw;
}

</style>
