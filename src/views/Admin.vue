<template>
    <router-link :to="{name: 'AdminGenre'}" >
        <button class="btn btn-primary btn-lg"> Admin Genre</button>
    </router-link>
    <br />
    <router-link :to="{name: 'AdminBook'}" >
        <button class="btn btn-primary btn-lg"> Admin Book</button>
    </router-link>


</template>
<script>
export default {
}
</script>
<style>
    .btn {
        margin-bottom: 20px;
    }
</style>