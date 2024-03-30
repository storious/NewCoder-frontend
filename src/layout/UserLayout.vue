<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import {
    IconDesktop,
    IconQrcode
} from '@arco-design/web-vue/es/icon'

const visible = ref(false)

const openQrcode = () => {
    visible.value = !visible.value;
}

</script>

<template>
    <div id="userLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
            </a-layout-header>
            <a-layout-content class="content">
                <a-card class="card" style="width: 360px; margin: 0 auto;" hoverable>
                    <div v-show="!visible" v-cloak>
                    
                        <div class="qrcode-container" @click="openQrcode">
                            <icon-qrcode size="50" class="img"></icon-qrcode>
                        </div>
                        <div>
                            <a-space>
                                <img class="logo" src="../assets/logo.svg" />
                            </a-space>
                            <RouterView></RouterView>
                        </div>
                    </div>
                    <div v-show="visible" v-cloak>

                        <div class="qrcode-container" @click="openQrcode">
                            <icon-desktop size="50" class="img"></icon-desktop>
                        </div>
                        <a-typography-title :heading="3">扫码登录</a-typography-title>
                        <img src="../assets/qrcode.png" class="show_full" />
                        <div>打开App扫一扫</div>
                    </div>
                </a-card>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<style scoped>
[v-cloak] {
    display: none !important
}

#userLayout {
    text-align: center;
    background-image: url("../assets/login_background.jpg");
}

#userLayout .card {
    width: 360px;
    margin-left: 24px;
    transition-property: all;
    border-radius: 15px;
    border: 1px solid #ccc;
    padding: 5px;
    box-shadow: #efefef;
    user-select: none;
    /* 禁用用户选择 */
    -webkit-user-select: none;
    /* 兼容Webkit浏览器，如Chrome和Safari */
    -moz-user-select: none;
    /* 兼容Firefox浏览器 */
    -ms-user-select: none;
    /* 兼容IE浏览器 */

    /* 防止在移动设备上双击缩放 */
    touch-action: manipulation;
}

.card:hover {
    transform: translateY(-4px);
}

#userLayout .header {
    margin-bottom: 10%;
}

#userLayout .logo {
    width: 100px;
    height: 100px;
}


#userLayout .content {
    background: liner-gradient(to, right, #bbbb, #fff);
    margin-bottom: 16px;
    padding: 20px;
}

.card {
    position: relative;

    overflow: hidden;
    /* 其他卡片样式 */
}

.show_full {
    width: 300px;
    height: 300px;
}

.qrcode-container {
    position: absolute;
    top: -5px;
    /* 从顶部的距离 */
    right: -2px;
    /* 从右侧的距离 */
    background-color: #fff;
    /* 二维码容器的背景颜色 */
    padding: 5px;
    /* 二维码容器的内边距 */
}

.qrcode-container .img {
    cursor: pointer;
}
</style>
