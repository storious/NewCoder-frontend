<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref, computed } from "vue"
import { useStore } from "vuex"
import checkAccess from "../access/checkAccess"
import {
    IconUser,
    IconImport,
    IconExport
} from '@arco-design/web-vue/es/icon';
import ACCESS_ENUM from "../access/accessEnum";
import { IconPark } from '@icon-park/vue-next/es/all';
import { Message } from '@arco-design/web-vue';

const router = useRouter();
const store = useStore();


//需要展示的路由菜单

const visibleRoutes = computed(() => {
    return routes.reduce((acc: any, item) => {
        if (item.children && item.children.length > 0) {
            const filteredChildren = item.children.filter((childItem) => {
                // 这里可以根据需要添加更多条件
                const loginUser = store.state.user.loginUser;
                return childItem.meta?.hideInMenu == false && checkAccess(loginUser, childItem.meta?.access as string);
            });
            if (filteredChildren.length > 0) {
                acc = filteredChildren;
            }
        }
        return acc;
    }, []);
});

// 默认主页
const selectKeys = ref(["/home"]);
router.push({ path: "/home" })
//监听路由
//跳转时, 更新选中的菜单
router.afterEach((to) => {
    selectKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
    router.push({
        path: key,
    });
};

const toLoginOrProfile = () => {
    const loginUser = store.state.user.loginUser;

    if (!loginUser.userRole || loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
        router.push({
            path: "/user/login"
        })
    }
    else {
        router.push({
            path: "/profile/info"
        })
    }
}

const handleSelect = async (option: any) => {

    if (option.value === "login") {
        if (store.state.user.loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
            router.push(
                {
                    path: "/user/login"
                }
            )
        }
        else {
            Message.error("您已登录！") 
        }
    } else if (option.value === "logout") {
        if (store.state.user.loginUser.userRole !== ACCESS_ENUM.NOT_LOGIN) {
            await store.dispatch("user/userLogout")
            router.push({
                path: "/home",
                replace: true
            })
        }
    }
}

</script>
<template>
    <a-row id="globalHeader" style="margin-bottom: 16px;" align="center" :warp="false">
        <a-col flex="auto">
            <a-menu mode="horizontal" :default-selected-keys="['/home']" :selected-keys:="selectKeys"
                @menu-item-click="doMenuClick">
                <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                    <div class="title-bar">
                        <img class="logo" src="../assets/logo.svg" />
                        <div class="title">New Coder</div>
                    </div>
                </a-menu-item>
                <a-menu-item v-for="item in visibleRoutes" :key="item.path">
                    {{ item.name }}
                    <template #icon>
                        <IconPark :type="item.meta?.icon" theme="outline" />
                    </template>
                </a-menu-item>
            </a-menu>
        </a-col>
        <a-col class="avatar" flex="50px">
            <a-dropdown @select="handleSelect">
                <a-avatar>
                    <icon-user />
                </a-avatar>
                <template #content>
                    <a-doption :value="{ value: 'login' }" popup-visible><icon-import /> 登录 / 注册</a-doption>
                    <a-doption :value="{ value: 'logout' }" popup-visible><icon-export /> 登出</a-doption>
                </template>
            </a-dropdown>

        </a-col>
        <a-col flex="100px">
            <a-link @click="toLoginOrProfile">{{ store.state.user?.loginUser?.userName ?? '未登录' }}</a-link>
        </a-col>
    </a-row>
</template>

<style scoped>
.title-bar {
    display: flex;
    align-items: center;
}

.title {
    color: black;
    font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: large;
    margin-left: 8px;
}

.logo {
    height: 50px;
}

.avatar {
    cursor: pointer;
}
</style>
