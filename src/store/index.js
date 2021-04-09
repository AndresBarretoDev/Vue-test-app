import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        infoPost:[],
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
        createUserComment(state, payload){
            state.infoPos = payload
        },
        toggleCommentBox(state, payload){
            state.showCommentBox = {
                status: true,
                id:payload
            }
        },
        handleReactions(state, payload){
            // console.log("mutation add", state, payload);
            state.infoPos = payload
        }
    },
    actions:{
        createPost({commit}, payload){
            commit('createPost', payload)
        },
        createUserComment({commit},{ postId , comment }){
            const arrTemp = this.state.infoPost.map( (post) =>{
                if (post.id === postId) post.comments = [...post.comments, comment]
                return post
            });
            commit('createUserComment', arrTemp)
        },
        toggleCommentBox({commit}, payload){
            commit('toggleCommentBox', payload);
        },
        handleReactions( { commit },payload){
            const { postId, text} = payload;
            const arrTemp = this.state.infoPost.map( (post) =>{
                if (post.id === postId) post.reactions = [...post.reactions, text]
                return post
            });
            commit('handleReactions', arrTemp);
            handlePush()
            
        }
    },
    getters:{
        getAllPost: state => state.infoPost, 
        getAllReactions: state => state.reactions, 
    },
   
});
const handlePush = ()=>{
console.log("handle push");
}
