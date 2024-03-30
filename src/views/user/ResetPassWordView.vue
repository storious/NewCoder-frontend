<script setup lang="ts">
import { reactive, ref } from "vue";
import { Message } from '@arco-design/web-vue';
import { useRouter } from "vue-router";

const form = reactive({
    userAccount: '',
    userPassword: '',
    secondPassword: ''
});

const visible = ref(false);
const status = ref(false);
const button_info = ref("获取验证码");
let verCode = "";
const router = useRouter();



const getVerification = () => {
    Message.info("验证码已经发送, 请注意查收")
    verCode = "123456"
    status.value = true;
    let i = 10

   const count = setInterval(() => {
        i--;
        if (i > 0) {
            button_info.value = i.toString() + "秒后可重新发送"
            i--;
        }
        else{
            button_info.value = "获取验证码";
            status.value = false;
            clearInterval(count)
        }
    }, 1000)
    
}

const onFinish = (value: string) => {
    if (value === verCode) {
        visible.value = true;
        Message.success("验证成功, 请重置密码")
    }
    else {
        visible.value = false;
        Message.error("验证码错误")
    }
};

const reset = () => {
    router.push({
        path: "/user/login"
    })
    Message.success("密码重置成功")
}

</script>

<template>
    <div>
        <a-form style="max-width: 320px; margin:0 auto" label-algin="right" auto-label-width :model="form">
            <template v-if="visible">
                <a-form-item field="userPassword">
                    <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
                </a-form-item>
                <a-form-item field="secondPassword">
                    <a-input-password v-model="form.secondPassword" placeholder="请重复密码" />
                </a-form-item>
                <a-form-item>
                    <a-button @click="reset" long size="large" type="outline" shape="round" html-type="submit">重置</a-button>
                </a-form-item>
            </template>
            <template v-else>
                <a-form-item field="userAccount">
                    <a-input v-model="form.userAccount" placeholder="请输入邮箱" />
                </a-form-item>
                <a-form-item>
                    <a-verification-code masked @finish="onFinish" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" size="large" shape="round" long :loading="status" 
                        html-type="submit" @click="getVerification">{{ button_info }}</a-button>
                </a-form-item>
            </template>
        </a-form>
    </div>
</template>

<style scoped></style>