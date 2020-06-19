import React, { useState } from 'react';
import MainRouter from './routes.js';
import './App.css';
import 'antd/dist/antd.css';
import { 
  Layout,
  Affix,
  Menu,
  Breadcrumb,
  Button,
  Space
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined
  // UserOutlined
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function App() {

  const [sider, setSider] = useState(true)

  const siderShow = () => {
    setSider(!sider)
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={sider} onCollapse={siderShow} >
        <div 
          className="logo"
          style={{
            height: '32px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '16px'
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 13 }}>
          <Button 
            type="primary" 
            shape="circle" 
            style={{
              float: 'right'
            }}
          >
            <UserOutlined />
          </Button>
        </Header>
        <Content style={{ margin: '15px 15px' }}>
          <MainRouter />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Cong Clothing ©2020 Created by Jawu</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
