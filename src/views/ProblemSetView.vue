<script setup lang="ts">

import { reactive, ref } from 'vue';
const alignLeft = ref(false);

const columns: any = [
    {
        title: 'Name',
        dataIndex: 'name',
        ellipsis: true,
        sortable: {
            sortDirections: ['ascend', 'descend']
        }
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        ellipsis: true,
        sortable: {
            sortDirections: ['ascend']
        },
        filterable: {
            filters: [{
                text: '> 20000',
                value: '20000',
            }, {
                text: '> 30000',
                value: '30000',
            }],
            filter: (value: string, record: any) => record.salary > value,
            multiple: true
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
        ellipsis: true,
        filterable: {
            filters: [{
                text: 'London',
                value: 'London',
            }, {
                text: 'Paris',
                value: 'Paris',
            },],
            filter: (value: any, row: any) => row.address.includes(value),
        }
    },
    {
        title: 'Email',
        dataIndex: 'email',
        ellipsis: true,
    },
];
const data = reactive([{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
}, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
}, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
}, {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
}, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
}]);

const handleChange = (data: any, extra: any, currentDataSource: any) => {
    console.log('change', data, extra, currentDataSource)
}


</script>

<template>
    <div id="problem-set">

        <div class="card"> 
            <a-space direction="vertical" size="medium" fill>
                <a-space>
                    <a-switch v-model="alignLeft" />
                    <span>Filter icon align left: {{ alignLeft }}</span>
                </a-space>
                <a-table class="table" :columns="columns" :data="data" :filter-icon-align-left="alignLeft" @change="handleChange" />
            </a-space>
        </div>
    </div>
</template>

<style scoped>
#problem-set .table{
    width: 50%
}

#problem-set .card{
    margin-left: 100px;
}
</style>