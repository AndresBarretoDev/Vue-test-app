import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        infoPost:[],
        usersPost:[],
        reactions:[],
        showCommentBox:{
            status:false, 
            commentId:0
        },
    },
    mutations:{
        createPost(state, payload){
            state.infoPost.push(payload);
        },
        createUserPost(state, payload){
            const { postId , comment } = payload;
            const arrTemp = state.infoPost.map( (post) =>{
                if (post.id === postId) post.comments = [...post.comments, comment]
                return post
            });
            state.infoPos = arrTemp
        },
        toggleCommentBox(state, payload){
            state.showCommentBox = {
                status: true,
                id:payload
            }
        }
    },
    actions:{
        createPost({commit}, payload){
            // simulate response from external service
            setTimeout(() => {
                commit('createPost', payload)
            }, 500);
        },
        createUserPost({commit}, payload){
            // simulate response from external service
            setTimeout(() => {
                commit('createUserPost', payload)
            }, 500);
        },
        toggleCommentBox({commit}, payload){
            commit('toggleCommentBox', payload)
        }
    },
    getters:{
        getAllPost: state => state.infoPost, 
        getAllUserPost: state => state.usersPost, 
        getAllReactions: state => state.reactions, 
    }
});