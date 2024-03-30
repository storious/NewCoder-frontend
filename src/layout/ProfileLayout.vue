<script setup lang="ts">
import { RouterView } from 'vue-router';
import foot  from '../utils/foot.ts';
</script>

<template>
    <div id="profileLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
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
#profileLayout .content {
    background: liner-gradient(to, right, #aaa, #ddd);
    margin-bottom: 16px;
    margin-top: 32px;
    padding: 20px;
}

#profileLayout .footer {
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
