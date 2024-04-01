<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from '@arco-design/web-vue/es/message';
import { useRouter } from "vue-router";
import { useStore } from "vuex"

const form = reactive({
    userAccount: '',
    userPassword: '',
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

const handleLogin = async () => {
    const res = await UserControllerService.userLogin(form);

    if (res.code === 0) {
        router.push({
            path: "/home",
            replace: true,
        });
        store.dispatch("user/getLoginUser");
    }
    else {
        message.error("登录失败," + res.message);
    }
}

const goRest = () => {
    router.push({
        path: "reset"
    })
}

const goRegister = () => {
    router.push({
        path: "register"
    })
}


</script>

<template>
    <div id="userLoginView">
        <a-form style="max-width: 320px; margin:0 auto" auto-label-width :model="form">
            <a-form-item field="userAccount">
                <a-input v-model="form.userAccount" placeholder="请输入账号" />
            </a-form-item>
            <a-form-item field="userPassword">
                <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item>
                <a-button @click="handleLogin" long size="large" type="primary" shape="round"
                    html-type="submit">登录</a-button>
            </a-form-item>
            <a-form-item>
                <a-link @click="goRest">忘记密码?</a-link>
                <a-link @click="goRegister" style="margin-left: auto;">新用户注册</a-link>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped></style>