import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Active, {loader as activeLoader} from "../components/Active/Active";
import Completed, {loader as completedLoader} from "../components/Completed/Completed";
import LongTerm from "../components/LongTerm/LongTerm";
import Nav from "../components/nav/Nav";
import FoodTask, {action as foodTaskAction} from "../components/TaskCreate/FoodTask/FoodTask";
import TaskCreate from "../components/TaskCreate/TaskCreate";
import { useDispatch } from "react-redux";
import { RouterProvider} from 'react-router-dom'
import ErrorPage from "./error-page";
import TaskCompleted from "../components/TaskCreate/TaskCompleted/TaskCompleted";


const Routers = () => {    
const dispatch = useDispatch();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav/>}>
            <Route path='/' element={<TaskCreate/>}>
                <Route path='/Food' element={<FoodTask/>} 
                action={foodTaskAction}
                errorElement = {<ErrorPage/>}
                />
                <Route path='/TaskCompleted' element={<TaskCompleted/>} 
                errorElement = {<ErrorPage/>}
                />
            </Route>
            <Route path='/active' 
                loader={activeLoader}
                element={<Active/>} />
            <Route path='/completed'
                loader={completedLoader(dispatch)}
                element={<Completed/>}
                errorElement = {<ErrorPage/>} />
            <Route path='/long_term' element={<LongTerm/>} />
        </Route>
    )
)

    return <RouterProvider router={router} />
  };




export default Routers
