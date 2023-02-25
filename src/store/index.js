import { createStore } from 'vuex'
import axios from 'axios'
const bedUrl = 'https://dashboard.render.com/web/srv-cft0iqh4reb6ks5rqn4g/deploys/dep-cft0irp4reb6ks5rr7sgL';

export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product: null,
    showSpinner: null,
    messege: null
    
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.user=value
    }
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${bedUrl}Users`);
      const { result, err } = await res.data;
      if (results) {
        context.commit(`setUsers`,results)
      } else {
        context.commit('setMessege',err)
      }
    }
  },
  modules: {
  }
})
