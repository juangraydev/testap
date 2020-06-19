import React, { useState, useContext, useEffect } from 'react';
import { SideNavContext } from '../../../App';
import { 
  Card
} from "antd";
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
//   DashboardOutlined
//   // UserOutlined
// } from '@ant-design/icons';
// import {
//   Link
// } from "react-router-dom";


function Bills() {
  const SideNav = useContext(SideNavContext);
  const { setKey } = SideNav;
  useEffect(() => {    
    setKey({value: '8'});
  }, []);
  
  return (
    <>
      <Card>
        <h1>header dashboard</h1>
      </Card>
    </>
  );
}

export default Bills;
