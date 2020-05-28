import React from 'react';
import { BellOutlined, SettingOutlined ,UserOutlined  } from '@ant-design/icons'
import { Row, Col ,Card } from 'antd';
import { Avatar } from 'antd';
import './nav.css' ;


const Nav = () => {
    return (


        <div>
            <Row>
                <Col span={18} push={10}>
                    <text className ="title" >Dashboard</text>
                    <BellOutlined />
                    <SettingOutlined />
                    <spen>
                        <Avatar size={64} icon={<UserOutlined />} />
                        <p1>Usman Sulong</p1> 
                        <p3>Accounting</p3>

                    </spen>
                </Col>
                <Col>
                        
                
                
                
                </Col>
            </Row>
            
            
        </div>
    )

}

export default Nav;