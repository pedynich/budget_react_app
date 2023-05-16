import { Button } from "antd"
import Title from "antd/es/typography/Title"
import { useNavigate } from "react-router"

const TaskCompleted = () =>{
    const navigate = useNavigate()
    return <div className="food-holder"> 
       <Title>Task Completed</Title>
       <Button onClick={() => navigate(-1)}>Back to Task Create</Button>
    </div>
}

export default TaskCompleted