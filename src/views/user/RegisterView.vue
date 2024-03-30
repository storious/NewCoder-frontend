<script setup lang="ts">
import { reactive } from "vue";
import { Message } from '@arco-design/web-vue';
import { useRouter } from "vue-router";

const form = reactive({
    userAccount: '',
    userPassword: '',
    secondPassword: '',
    userName: '',
});
const router = useRouter();

const handleRegister = async () => {
    router.push({
        path: "/user/login"
    })
    Message.success("注册成功")
}

</script>

<template>
    <div>
        <a-form style="max-width: 320px; margin:0 auto" label-algin="right" auto-label-width :model="form">
            <a-form-item field="userAccount">
                <a-input v-model="form.userAccount" placeholder="请输入邮箱" />
            </a-form-item>
            <a-form-item field="userName">
                <a-input v-model="form.userName" placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item field="userPassword">
                <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item field="secondPassword">
                <a-input-password v-model="form.secondPassword" placeholder="请重复密码" />
            </a-form-item>
            <a-form-item>
                <a-button @click="handleRegister" long size="large" type="outline" shape="round"
                    html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped></style>