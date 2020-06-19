import React, { useState } from 'react';
import MainRouter from './routes.js';
import './App.css';
import 'antd/dist/antd.css';
import { 
  Layout,
  Menu,
  Button
} from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  CodeSandboxOutlined,
  MoneyCollectOutlined,
  AuditOutlined,
  DollarOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export const SideNavContext = React.createContext();

function App() {

  const [sider, setSider] = useState(false)
  const [key, setKey] = useState({
    value: 1
  });

  console.log(key.value);
  
  const siderShow = () => {
    setSider(!sider)
  }

  const sidenavHandle = (e) => {
    setKey({value: e.key});
  }

  return (
    <SideNavContext.Provider value={{key, setKey}}>
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
          <BrowserRouter basename="/admin">
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']} 
            selectedKeys={[key.value]}
            onClick={sidenavHandle} 
            mode="inline"
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>  
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/contacts">Contacts</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingOutlined />}>
              <Link to="/items">Items</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
              <Link to="/salesorders">Sales Orders</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CodeSandboxOutlined />}>
              <Link to="/package">Package</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<MoneyCollectOutlined />}>
              <Link to="/invoices">Invoices</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<AuditOutlined />}>
              <Link to="/purchaseorders">Purchase Orders</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<DollarOutlined />}>
              <Link to="/bills">Bills</Link>
            </Menu.Item>
          </Menu>
          </BrowserRouter>
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
          <Footer style={{ textAlign: 'center' }}>Cong Clothing ©2020 Created by Us</Footer>
        </Layout>
      </Layout>
    </SideNavContext.Provider>
  );
}

export default App;
