<script setup lang="ts">
import { reactive } from "vue";
import { Message } from '@arco-design/web-vue';
import { useRouter } from "vue-router";
import { UserControllerService, UserRegisterRequest } from "../../../generated";
import { useStore } from "vuex"

const form = reactive({
    userAccount: '',
    userPassword: '',
    checkPassword: '',
    // userName: '',
});
const router = useRouter();
const store = useStore();

const handleRegister = async () => {
    router.push({
        path: "/user/login"
    })
    const res = await UserControllerService.userRegister(form)

    if (res.code === 0) {
        Message.success("注册成功")
        const _res = await UserControllerService.userLogin(form as UserRegisterRequest)

        if (_res.code === 0) {
            router.push({
                path: "/home",
                replace: true,
            });
            store.dispatch("user/getLoginUser");
        }
        else {
            Message.error("登录失败," + res.message);
        }
    }
    else {
        Message.error("注册失败")
    }
}

</script>

<template>
    <div>
        <a-form style="max-width: 320px; margin:0 auto" label-algin="right" auto-label-width :model="form">
            <a-form-item field="userAccount">
                <a-input v-model="form.userAccount" placeholder="请输入账号" />
            </a-form-item>
            <!-- <a-form-item field="userName">
                <a-input v-model="form.userName" placeholder="请输入用户名" />
            </a-form-item> -->
            <a-form-item field="userPassword">
                <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item field="checkPassword">
                <a-input-password v-model="form.checkPassword" placeholder="请重复密码" />
            </a-form-item>
            <a-form-item>
                <a-button @click="handleRegister" long size="large" type="outline" shape="round"
                    html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped></style>