import React from 'react';
import './App.css';
import Card from './component/card';
import Nav from './component/nav';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>Sider

        </Sider>
        <Layout>
          <Header>
            
            <Nav />
          </Header>

          <Content>
            <Card />
          </Content>

          <Footer>
            Footer
          </Footer>

        </Layout>
      </Layout>


    </div>
  );
}

export default App;
