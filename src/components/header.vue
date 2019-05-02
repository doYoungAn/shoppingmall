<template>
    <header class="header">
        <div>지빌리언몰</div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class HeaderComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 50px;
    background: green;
}
</style>

