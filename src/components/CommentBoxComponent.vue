<template>
    <div class="commentBox">
        <div class="commentBox__head">
            <p class="author">{{dataPost.name}}</p>
            <span class="time">hace 40 minutos</span>
        </div>
        <p class="commentBox__post">{{dataPost.post}}</p>
            <!-- <pre>{{dataPost}}</pre> -->
        <div class="commentBox__actions" v-if="dataPost.comments && dataPost.comments.length >= 0">
            <button class="btn">Reaccionar</button>
            <button class="btn" @click="showCommentBox">Comentar</button>
            <div class="reactions-opts">
                <span>Me gusta</span>
                <span>Interesante</span>
                <span>Me encanta</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'CommentBox',
        computed:{
            ...mapGetters(['getAllPost'])
        },
        methods:{
            ...mapActions(['toggleCommentBox']),
            
            showCommentBox(){
                this.getAllPost.forEach(( elem ) => {
                    if (elem.id === this.dataPost.id) {
                        this.toggleCommentBox(elem.id)
                    }
                })
            }
        },
        props:{
            dataPost:Object
        }
    }
</script>