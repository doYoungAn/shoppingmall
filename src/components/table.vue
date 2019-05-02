<template>
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>주문번호</th>
                <th>주문구분</th>
                <th>회원명</th>
                <th>재고유무</th>
                <th>수량</th>
                <th>결제구분</th>
                <th>운송장번호</th>
                <th>상품입고</th>
                <th>등록일</th>
                <th>ㅁㄴㅇㅁㄴㅇ</th>
            </tr>
        </thead>
        <tbody v-for="(item, index) of items">
            <tr>
                <td rowspan="2">asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
            </tr>
            <tr>
                <td colspan="9">
                    <div>
                        부가서비스
                        <input type="text">
                    </div>
                    <div>
                        물류센터 요청사항
                        <input type="text">
                    </div>
                    <div>
                        관리자메모
                        <input type="text">
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>상품이미지</th>
                                <th>통관품목</th>
                                <th>구매자이름</th>
                                <th>Traking Number</th>
                                <th>색상</th>
                                <th>단가</th>
                                <th>ㅁㄴㅇ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>asdasd</td>
            </tr>
        </tbody>
        <!-- <tbody>
            <tr>
                <td rowspan="2">asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
                <td>asdasd</td>
            </tr>
            <tr>
                <td colspan="9">asdasd</td>
                <td>asdasd</td>
            </tr>
        </tbody> -->
    </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Products } from './../data';

@Component({})
export default class TableComponent extends Vue {
    public items: any[] = Products;
}

</script>

<style lang="scss" scoped>
table,
th,
td {
    border: 1px solid #333;
}
.table {
    width: 100%;
}
</style>


