import { Form, redirect } from "react-router-dom"
import { Input, Typography, Button } from 'antd';

const { Title } = Typography

export const action = ({ request, params }) => {
    console.log(request, params);
    return redirect('/active')
}

const FoodTask = () => {
    return <div className="food-holder">
        <Title>Food</Title>
        <Form method="post">
            <Input placeholder="Name" name="food-item" type="text" />
            <Button htmlType="submit" type="primary">Add Task</Button>
        </Form>
    </div>
}

export default FoodTask