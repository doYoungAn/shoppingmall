<template>
    <div>
        <HeaderComponent />
        <NavComponent />
        <div>
            <PageTitleComponent />
            <KindsComponent />
            <FilterComponent />
            <TableComponent />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeaderComponent from './../components/header.vue';
import NavComponent from './../components/nav.vue';
import PageTitleComponent from './../components/page-title.vue';
import KindsComponent from './../components/kinds.vue';
import FilterComponent from './../components/filter.vue';
import TableComponent from './../components/table.vue';

@Component({
    components: {
        HeaderComponent,
        NavComponent,
        PageTitleComponent,
        KindsComponent,
        FilterComponent,
        TableComponent
    }
})
export default class HomePage extends Vue {

} 
</script>

<style lang="scss">

</style>


