import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
        MoneyHide: false 
    },  
    mutations: {  
        setMoneyHide(state, provider) {  
          state.MoneyHide = provider
        }
    }  
})  

export default store