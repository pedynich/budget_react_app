import { Menu } from 'antd';
import {Outlet, useNavigate} from 'react-router-dom';

export default function Nav(){
    const navigate = useNavigate()
    const items = [
        {
           label: <span onClick={() => navigate('/')}>Task Create</span>,
           key: 'tc'
        },
        {
            label: <span onClick={() => navigate('/active')}>Active</span>,
            key: 'active'
         },
         {
            label: <span onClick={() => navigate('/completed')}>Completed</span>,
            key: 'completed'
         },
         {
            label: <span onClick={() => navigate('/long_term')}>Long Term</span>,
            key: 'long_term'
         }
    ]
    return <div >
        <Menu mode='horizontal' items={items}/> 
        <Outlet/>
    </div>
}