<template>
    <div class="commentBox">
        <div class="commentBox__head">
            <p class="author">Andrés Barreto</p>
            <span class="time">hace 40 minutos</span>
        </div>
        <p class="commentBox__post">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eligendi, deleniti
            consequatur repellat
            minima quae ex dolores. Consequatur, nulla iusto!</p>
        <div class="commentBox__actions">
            <button class="btn">Reaccionar</button>
            <button class="btn">Comentar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommentBox'
    }
</script>