<template>
  <div class="main">
    <!-- COMPONENT ENTRANCE  -->
    <div class="cardBox">
      <div class="cardBox__top">
        <input type="text" 
          class="form__input" 
          placeholder="Escribe aquí tu estado">
      </div>
      <div class="cardBox__middle">
        <button class="btn btn--primary" @click="createPost()">Publicar</button>
      </div>
    </div>

    <!-- END COMPONENT ENTRANCE  -->

    <!-- POST COMPONENT  -->
    <CardPost/>
    <!-- END POST COMPONENT  -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import CardPost from '@/components/CardPostComponent'
  import store from '@/store/index'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      CardPost,
    },
    methods: {
      createPost() {
        console.log(store);
      }
    },
  }
</script>