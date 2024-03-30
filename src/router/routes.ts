import { RouteRecordRaw } from "vue-router";
import ACCESS_ENUM from "../access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "null",
    component: () => import("../layout/BasicLayout.vue"),
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import("../components/HelloWorld.vue"),
        meta: {
          hideInMenu: false,
          icon: 'home'
        },
      },

      {
        path: "/problemSet",
        name: "题库",
        component: () => import("../views/ProblemSetView.vue"),
        meta: {
          hideInMenu: false,
          icon: 'list',
          access: ACCESS_ENUM.NOT_LOGIN,
        },
      },

      {
        path: "/about",
        name: "关于我的",
        component: () => import("../views/AboutView.vue"),
        meta: {
          hideInMenu: false,
          icon: 'more'
        },
      },

      {
        path: "/toAdmin",
        name: "管理员菜单",
        redirect: "/admin",
        meta: {
          hideInMenu: false,
          access: ACCESS_ENUM.ADMIN,
          icon: 'system'
        },
      },
    ],
  },

  {
    path: "/admin",
    name: "管理员页面",
    component: () => import("../views/admin/AdminView.vue"),
    meta: {
      hideInMenu: false,
      access: ACCESS_ENUM.ADMIN,
    },
  },

  {
    path: "/problems",
    name: "做题页面",
    component:() => import("../layout/DescriptionLayout.vue"),
    children: [
      {
        path: "/problems/description",
        name: "做题页面",
        component:() => import("../views/problem/DescriptionView.vue"),
      },
    ]
  },

  {
    path: "/noAuth",
    name: "无权限",
    component: () => import("../views/NoAuthView.vue"),
    meta: {
      hideInMenu: true,
    },
  },

  {
    path: "/profile",
    name: "个人中心",
    component: () => import("../layout/ProfileLayout.vue"),
    children: [
      {
        path: "/profile/info",
        name: "用户信息",
        component: () => import("../views/profile/ProfileView.vue"),
      },
    ],
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.USER,
    },
  },

  {
    path: "/user",
    name: "用户",
    component: () => import("../layout/UserLayout.vue"),
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: () => import("../views/user/LoginView.vue"),
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: () => import("../views/user/RegisterView.vue"),
      },
      {
        path: "/user/reset",
        name: "找回密码",
        component: () => import("../views/user/ResetPassWordView.vue"),
      },
    ],
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.NOT_LOGIN,
    },
  },
];
