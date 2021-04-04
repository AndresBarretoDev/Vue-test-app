<template>
  <div class="cardBox cardBox--post">
    <div class="cardBox__top">
      <!-- AVATAR THUMBNAIL  -->
      <Avatar />
      <!-- END AVATAR THUMBNAIL  -->
      <!-- PUBLICATION BOX  -->
      <div class="cardBox__content">
        <CommentBox />
      </div>
      <!-- END PUBLICATION BOX  -->
    </div>
    <div class="cardBox__middle">
      <!-- BADGES  -->
      <div class="reactions">
        <span class="reactions__tag" v-for="item in [1,2,3] " :key=item></span>
        <p class="counter  ml15">{{[1,2,3].length}}</p>
      </div>
      <!-- END BADGES  -->
    </div>
    <!-- COMMENTS USER RESPONSE  -->
    <div class="cardBox__bottom" v-for="item in [1,2,3] " :key=item>
      <Avatar />
      <CommentBox class="commentBox--response" />
    </div>
    <!-- END COMMENTS USER RESPONSE  -->
  </div>
</template>

<script>
  import CommentBox from '@/components/CommentBoxComponent';
  import Avatar from '@/components/AvatarComponent';
  export default {
    components: {
      CommentBox,
      Avatar
    },
    name: 'CardPostComponent',
    data() {
      return {
        //  msg: 'value'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>