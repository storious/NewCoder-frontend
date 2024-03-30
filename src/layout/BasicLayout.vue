<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../components/GlobalHeader.vue';
import foot from '../utils/foot.ts';
</script>

<template>
    <div id="basicLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
                <GlobalHeader></GlobalHeader>
            </a-layout-header>
            <a-layout-content class="content">
                <RouterView></RouterView>
            </a-layout-content>
            <a-layout-footer class="footer">
                {{ foot.author }}
                <p>{{ foot.version }}</p>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
#basicLayout .header {
    box-shadow: #ddd 1px 1px 5px;
    background-color: #fff;
}

#basicLayout .content {
    background: liner-gradient(to, right, #aaa, #fff);
    margin-bottom: 16px;
    padding: 20px;
}

#basicLayout .footer {
    background: #333;
    padding: 16px;
    color: #eee;
    position: sticky;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
