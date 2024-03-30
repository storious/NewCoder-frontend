/*
* 检查权限（判断当前登录用户是否有某个权限）
*/

import ACCESS_ENUM from "./accessEnum"

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
    //获取当前用户权限
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true;
    }

    //登录才能访问
    if (needAccess === ACCESS_ENUM.USER) {
        if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
            return false;
        }
    }

    //需要管理员权限
    if (needAccess == ACCESS_ENUM.ADMIN) {
        // 是否是管理员
        if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
            return false;
        }
    }
    return true;
}

export default checkAccess;