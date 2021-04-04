import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        infoPost:{
            userName:'Andres barret'
        }
    },
    mutations:{
        createPost(state, payload){
            console.log({state}, {payload});
            // state.infoPost.userName = state
        }
    },
    actions:{

    }
});