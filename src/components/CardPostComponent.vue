<template>
  <div class="cardBox cardBox--post">
    <div class="cardBox__top">
      <!-- AVATAR THUMBNAIL  -->
        <Avatar :image="dataPost.image"/>
      <!-- PUBLICATION BOX  -->
      <div class="cardBox__content">
        <CommentBox :dataPost="dataPost" />
      </div>
      <!-- END PUBLICATION BOX  -->
    </div>
    <div class="cardBox__middle" v-if="getAllReactions && getAllReactions.length > 0">
      <!-- BADGES  -->
      <div class="reactions" >
        <span class="reactions__tag" v-for="(item,idx) in [1,2,3] " :key="idx"></span>
        <p class="counter ml15">{{[1,2,3].length}}</p>
      </div>
      <!-- END BADGES  -->
    </div>
    <!-- COMMENTS USER RESPONSE  -->
      <div v-if="dataPost.comments && dataPost.comments.length > 0">
        <div class="cardBox__bottom " v-for="item in dataPost.comments " :key="item.id">
          <Avatar :image="item.image"/>
          <CommentBox :dataPost="item" class="commentBox--response" />
        </div>
      </div>
    <footer class="cardBox__footer" v-if="showCommentBox.status && showCommentBox.id === dataPost.id">
       <textarea 
          class="form__textarea form__textarea--bordered"
          placeholder="Escribe un comentario" 
          name="commentPost" 
          id="commentPost"
          v-model="userComment">
        </textarea>
         <button class="btn btn--primary mlA mt20" 
            @click="handleCreateUserPost(userComment, dataPost.id)">
            Comentar
          </button>
    </footer>
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
      ...mapActions(['createUserPost', 'toggleCommentBox']),
      handleCreateUserPost(post, postId){
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
          this.createUserPost(tempPost);
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
