import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Active from "../components/Active/Active";
import Completed from "../components/Completed/Completed";
import LongTerm from "../components/LongTerm/LongTerm";
import Nav from "../components/nav/Nav";
import FoodTask, {action as foodTaskAction} from "../components/TaskCreate/FoodTask/FoodTask";
import TaskCreate from "../components/TaskCreate/TaskCreate";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav/>}>
            <Route path='/' element={<TaskCreate/>}>
                <Route path='/Food' element={<FoodTask/>} action={foodTaskAction}/>
            </Route>
            <Route path='/active' element={<Active/>} />
            <Route path='/completed' element={<Completed/>} />
            <Route path='/long_term' element={<LongTerm/>} />
        </Route>
    )
)

export default router
