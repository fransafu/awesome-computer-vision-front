import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
