import { createStore } from 'vuex'
import user from "./modules/user"

const store = createStore({
  modules: {
    user,
  },
  mutations: {}
})
export default store
