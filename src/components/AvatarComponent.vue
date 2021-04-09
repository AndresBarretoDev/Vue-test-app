<template>
    <div class="avatar">
        <img :src="image" alt="" class="image-cover">
    </div>
</template>

<script>
    export default {
        name: 'Avatar',
        props:{
            image:String
        }
    }
</script>