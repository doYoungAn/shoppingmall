<template>
    <div class="filter">
        <div class="filter-row">
            <div v-for="(item, index) of selectItems" class="filter-item">
                <div>{{ item.title }}</div>
            </div>
        </div>
        <div class="filter-row">
            <div v-for="(item, index) of inputItems" class="filter-item">
                <div>{{ item.title }}</div>
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class FilterComponent extends Vue {

    public selectItems: any[] = [
        {
            title: '페이지수'
        },
        {
            title: '주문구분'
        },
        {
            title: '주문상태'
        },
        {
            title: '시작일'
        },
        {
            title: '종료일'
        },
        {
            title: '주문입고상태'
        },
    ];

    public inputItems: any[] = [
        {
            title: '트래킹번호'
        },
        {
            title: '운송장번호'
        },
        {
            title: '주문번호'
        },
        {
            title: '오더넘버'
        },
        {
            title: '아이디'
        },
        {
            title: '이름'
        },
        {
            title: '수취인명'
        },
        {
            title: '사서함번호'
        },
        {
            title: '랙번호'
        }
    ]
}
</script>

<style lang="scss" scoped>
.filter {
    width: 100%;
    background-color: gray;
}
.filter-row {
    display: flex;
}
</style>


