<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const handle = () => {
    router.push({
        path: "/home"
    })
}

</script>

<template>
    <div>
        <a-result status="403" subtitle="服务器拒绝访问">
            <template #extra>
                <a-space>
                    <a-button type="primary" @click="handle">Back</a-button>
                </a-space>
            </template>
        </a-result>
    </div>
</template>

<style scoped></style>