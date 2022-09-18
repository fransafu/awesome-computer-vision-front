import { Layout, Menu } from 'antd';

import EyeSvg from '../assets/imgs/eye-logo.svg';

import './Header.scss';

const { Header } = Layout;

const HeaderLayout = () => {
  const ListLinks = ['Home', 'Dataset'].map(key => ({
    key,
    label: key
  }));

  return (
    <Header className='site-layout-background'>
      <div className='logo'>
        <img src={EyeSvg} style={{ height: 53, width: 36 }} alt='website logo' />
        Awesome computer vision
      </div>
      <Menu theme='light' mode='horizontal' defaultSelectedKeys={['Home']} items={ListLinks} />
    </Header>
  );
};

export default HeaderLayout;
