import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import EyeSvg from '../assets/imgs/eye-logo.svg';

import './Header.scss';

const { Header } = Layout;

const HeaderLayout = () => {
  const defaultSelectedKeys = ['home'];

  const items = [
    {
      label: (<Link to='/'>Home</Link>),
      key: 'home',
    },
    {
      label: (<Link to='/dataset'>Dataset</Link>),
      key: 'dataset',
    },
  ];

  return (
    <Header className='site-layout-background'>
      <div className='logo'>
        <img src={EyeSvg} style={{ height: 53, width: 36 }} alt='website logo' />
        Awesome computer vision
      </div>
      <Menu theme='light' mode='horizontal' defaultSelectedKeys={defaultSelectedKeys} items={items} />
    </Header>
  );
};

export default HeaderLayout;
