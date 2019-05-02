<template>
    <div class="kinds">
        <div class="kinds-item" v-for="(item, index) of items">
            {{ item.title }}
            <div class="kinds-item-inner">
                <div v-for="(subItem, subIndex) of item.subs">
                    {{ subItem.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Kinds } from './../data';

@Component({})
export default class KindsComponent extends Vue {
    public items: any[] = Kinds;
}

</script>

<style lang="scss" scoped>
.kinds {
    display: flex;
    border: 2px solid black;
}
.kinds-item {
    flex: 1;
    border-left: 1px solid gray;
}
</style>

