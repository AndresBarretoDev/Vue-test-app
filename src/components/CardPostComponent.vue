<template>
  <div class="cardBox cardBox--post">
    <div class="cardBox__top">
        <Avatar :image="dataPost.image"/>
        <div class="cardBox__content">
          <CommentBox :dataPost="dataPost" />
        </div>
    </div>
    <div class="cardBox__middle"
      v-if="dataPost.reactions.length > 0 || dataPost.comments.length > 0">
      <!-- REACTIONS BOX  -->
      <div class="reactions" v-if="dataPost.reactions && dataPost.reactions.length > 0">
        <span class="reactions__tag" 
          :class="item" 
          v-for="(item,idx) in dataPost.reactions" 
          :key="idx">
        </span>
        <p class="counter ml15" >{{dataPost.reactions.length}}</p>
      </div>
      <p class="counter mlA" 
        v-if="dataPost.comments.length > 0">{{dataPost.comments.length}} 
        {{dataPost.comments.length == 1 ? 'Comentario': 'comentarios'}}
      </p>
      <!-- END REACTIONS BOX  -->
    </div>
    
    <!-- COMMENTS USER RESPONSE  -->
      <div v-if="dataPost.comments && dataPost.comments.length > 0">
        <div class="cardBox__bottom " 
          v-for="item in dataPost.comments " 
          :key="item.id">
          <Avatar :image="item.image"/>
          <CommentBox :dataPost="item" class="commentBox--response" />
        </div>
      </div>
      <transition name="fade">
        <footer class="cardBox__footer" 
          v-if="showCommentBox.status && showCommentBox.id === dataPost.id">
          <textarea 
              class="form__textarea form__textarea--bordered"
              placeholder="Escribe un comentario" 
              name="commentPost" 
              id="commentPost"
              v-model="userComment">
            </textarea>
            <button class="btn btn--primary mlA mt20" 
                @click="handleCreateUserComment(userComment, dataPost.id)">
                Comentar
            </button>
        </footer>
        </transition>
    <!-- END COMMENTS USER RESPONSE  -->
  </div>
</template>

<script>
  import Avatar from '@/components/AvatarComponent';
  import CommentBox from '@/components/CommentBoxComponent';
  import { mapActions, mapGetters, mapState } from 'vuex';
  import generateName from '../Random-names'
  export default {
    components: {
      CommentBox,
      Avatar
    },
    name: 'CardPostComponent',
    data:()=>({
      userComment:''
    }),
    computed:{
      ...mapGetters(['getAllReactions', 'getAllUserPost']),
      ...mapState(['showCommentBox']),
    },
    methods:{
      ...mapActions(['createUserComment', 'toggleCommentBox']),
      handleCreateUserComment(post, postId){
        if (this.userComment != '') {
          let numRandom = Math.floor(Math.random() * 10);
          const commentUser = {
              name:generateName(), 
              id: new Date().getTime(),
              image:`https://picsum.photos/300/300?random=${numRandom}`, 
          }
          const tempPost = {
            comment:{...commentUser, post}, postId
          }
          this.createUserComment(tempPost);
          this.toggleCommentBox(null)
          this.userComment = '';
        }
      },
    },
    props: {
      dataPost: Object
    }
  }
</script>
