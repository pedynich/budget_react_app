import { useDispatch, useSelector } from "react-redux"
import { getTodosThunk } from "../../assets/reducers/completedItemsReducer"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
import { Table, Typography } from "antd"

const { Title } = Typography

export const loader = (dispatch) => async () => {
    dispatch(getTodosThunk())
    const encodedCompleted = localStorage.getItem('completed');
    let existingCompleted = encodedCompleted ? JSON.parse(encodedCompleted) : [];
    //console.log(existingCompleted);
    return existingCompleted
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

function Completed (){  
    const todos = useSelector(state => state.todos)
    console.log('--todos in Completed',todos)
    const dataCompleted = useLoaderData()

    return <div className="content-holder">
        <Title>Completed Tasks</Title>
        <Table columns={columns} dataSource={dataCompleted} />
    </div>
}



export default Completed
