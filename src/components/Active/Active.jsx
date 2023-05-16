import { Button, Table, Typography } from 'antd';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import { addCompleted } from '../../app/request';

const { Title } = Typography

export const loader = () => {
    const encoded = localStorage.getItem('list');
    let existing = encoded ? JSON.parse(encoded) : [];
    return existing
}

const columns = [
    {
        title: 'Task name',
        dataIndex: 'foodItem',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
]


function Active() {
    const [data, setData] = useState(useLoaderData())
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const onSelectChange = (newItem) => {
        setSelectedRowKeys(newItem)
    }


    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
        ],
    }
    const onAfterAdd = () => {
        setData(addCompleted(selectedRowKeys, data));
    }
    //console.log('--render-data', data);
    return <div className='content-holder'>
        <Title>Essential Tasks</Title>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        <Button onClick={onAfterAdd}>Add to Completed</Button>
    </div>
}

export default Active
