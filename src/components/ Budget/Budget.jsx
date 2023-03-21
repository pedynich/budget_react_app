import s from './budget.module.css';
import { Typography } from 'antd';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router';

const {Title} = Typography;

export default function Budget() {
    return <div className={s.main}>
        <Nav/>
        <Outlet/>
    </div>
}
