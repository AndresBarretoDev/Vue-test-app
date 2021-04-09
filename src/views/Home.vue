<template>
  <div class="main">
    <!-- COMPONENT ENTRANCE  -->
    <div class="cardBox">
      <div class="cardBox__top pb0">
        <textarea class="form__textarea"
          placeholder="Escribe aquí tu estado" v-model="modelPost"
          name="infoPost" id="infoPost">
        </textarea>
      </div>
      <div class="cardBox__middle">
        <button class="btn btn--primary" @click="crearElPost(modelPost)">Publicar</button>
      </div>
    </div>
    <!-- END COMPONENT ENTRANCE  -->
    <!-- POST COMPONENT  -->
    <div v-if="getAllPost && getAllPost.length > 0">
      <CardPost v-for="card in getAllPost" :key="card.id" :dataPost="card" />
    </div>
    <!-- END POST COMPONENT  -->
  </div>
</template>

<script>
  import CardPost from '@/components/CardPostComponent'
  import { mapActions, mapGetters } from 'vuex'
  import moment from 'moment'
  export default {
    name: 'Home',
    components: {
      CardPost,
    },
    data() {
      return {
        modelPost: '',
        moment, 
      }
    },
    computed:{
      ...mapGetters(['getAllPost'])
    },
 
    methods: {
      ...mapActions(['createPost']),
      crearElPost(data){
        
        if (this.modelPost != '') {
          const userInfo = {
            name: 'Andres Barreto', 
            post:data, 
            id: new Date().getTime(),
            image:'https://picsum.photos/300/300?random=1', 
            hour:moment().format(),
            comments:[],
            reactions:[]
          }
          this.createPost(userInfo);
          this.modelPost = ''
        }
      }
    },
  }
</script>