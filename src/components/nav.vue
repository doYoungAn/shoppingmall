<template>
    <nav class="nav">
        <div class="nav-item" v-for="(item , index) of items">{{ item.title }}</div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Navs } from './../data';

@Component({})
export default class NavComponent extends Vue {
    public items: any[] = Navs;
}
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    background-color: blue;
    display: flex;
}
.nav-item {
    padding: 1rem;
    color: #ffffff;
}
</style>

