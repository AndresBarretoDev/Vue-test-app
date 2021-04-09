<template>
    <div class="commentBox" >
        <div class="commentBox__head">
            <p class="author">{{dataPost.name}}</p>
            <span class="time">{{timeAgo}}</span>
        </div>
        <p class="commentBox__post">{{dataPost.post}}</p>
            <!-- <pre>{{dataPost}}</pre> -->
        <div class="commentBox__actions" v-if="dataPost.comments && dataPost.comments.length >= 0">
            <button class="btn" @mousedown="showReactionBox = !showReactionBox">Reaccionar</button>
            <button class="btn" @click="showCommentBox">Comentar</button>
        </div>
        <div class="reactions-opts" 
            :class="{show:showReactionBox}" 
            v-if="showReactionBox"
            @mouseleave="showReactionBox = false">
            <span @click="addReaction('encanta', dataPost.id)" title="Me encanta">😂</span>
            <span @click="addReaction('sorprende', dataPost.id)" title="Me Sorprende">😲</span>
            <span @click="addReaction('gusta',dataPost.id)" title="Me Gusta">😊</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'CommentBox',
        data() {
            return {
                showReactionBox: false,
                timeAgo:'',
                oldTime:'',
                interval:null
            }
        },
        created () {
             this.oldTime = new Date();
             this.interval=setInterval(() => {
             this.timeAgo = this.moment(this.oldTime).fromNow();
            }, 1000)
        },
        
        computed:{
            ...mapGetters(['getAllPost']),
           
        },
        methods:{
            ...mapActions(['toggleCommentBox','handleReactions']),
           
            showCommentBox(){
                this.getAllPost.forEach(( elem ) => {
                    if (elem.id === this.dataPost.id) {
                        this.toggleCommentBox(elem.id)
                    }
                })
            },
            addReaction(msg, postId){
                const temp = {
                    text:msg, 
                    postId, 
                    id: new Date().getTime(),
                }
                this.handleReactions(temp)
            }
        },
        props:{
            dataPost:Object
        }
    }
</script>