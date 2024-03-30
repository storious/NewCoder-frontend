<!--
 * @Author: storious <2227563488@qq.com>
 * @Date: 2024-01-27 09:47:56
 * @LastEditors: storious
 * @LastEditTime: 2024-03-18 22:04:46
 * @Description: 
 * @FilePath: \newcoder\src\App.vue
-->
<script setup lang="ts">
import { onMounted } from "vue";

// 全局初始化函数
const doInit = () => {
  console.log("Welcome to New Coder!!!");
};

onMounted(() => {
  doInit();

});

</script>

<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>


<style lang="scss" scoped>
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
<!-- openapi --input http://localhost:8888/api/v3/api-docs/com.wjie.newcoder --output ./generated --client axios -->
