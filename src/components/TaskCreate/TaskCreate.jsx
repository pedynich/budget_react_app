import { SettingOutlined, AuditOutlined, HomeOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet} from 'react-router';
import { Link } from 'react-router-dom';
import style from './TaskCreate.module.css' 

function getItem(label, key, icon, children, type) {
    if (label!='Household shopping' && label!='Payment of bills' && label!='Long Term')
    label = <Link to={`/${label}`}>{label}</Link>
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Household shopping', 'sub1', <HomeOutlined />, [
        getItem('Food', '1'),
        getItem('Household chemicals', '2'),
    ]),
    getItem('Payment of bills', 'sub2', <AuditOutlined />, [
        getItem('Internet', '3'),
        getItem('Electricity', '4'),
        getItem('Education', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    // getItem('Long Term', 'sub4', <SettingOutlined />, [
    // ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function TaskCreate() {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return <div className={style.taskCreate}>
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                width: 256,
            }}
            items={items}
        />
        <Outlet/>
    </div>
}

export default TaskCreate
