import { Form, redirect, useActionData, useFetcher } from "react-router-dom"
import { Input, Typography, Button } from 'antd';

const { Title } = Typography

export const action = async({ request, params }) => {
    
    let formData = await request.formData()
    if (!formData.get("food_item")){
        return {message: 'Add task name!'}
    }

    let food = {
        key: Math.random().toString(36).substring(2, 9), 
        foodItem: formData.get("food_item"),
        date: new Date().toLocaleDateString()
    }

    let encoded = localStorage.getItem('list');
    let existing = encoded ? JSON.parse(encoded) : [];
    existing.push(food);
    localStorage.setItem('list', JSON.stringify(existing));
    return redirect('/TaskCompleted')
}


const FoodTask = () => {
    const data = useActionData()
    return <div className="food-holder">
        <Title>Food</Title>
        <Form method="post">
            <Input placeholder="Name" name="food_item" type="text" />
            <Button htmlType="submit" type="primary">Add Task</Button>
            { data?.message && <p>{data.message}</p> }
        </Form>
    </div>
}

export default FoodTask