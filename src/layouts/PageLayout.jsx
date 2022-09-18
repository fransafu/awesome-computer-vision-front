import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

const { Header, Footer, Content } = Layout;

export default function PageLayout () {
  return (
    <>
      <Layout>
        <Header>
          <HeaderLayout />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <FooterLayout />
        </Footer>
      </Layout>
    </>
  );
}
