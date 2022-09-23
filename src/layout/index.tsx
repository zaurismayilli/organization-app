import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

import Footer from '../components/Footer';
import Header from '../components/Header';

import './index.scss';
import { useAuth } from '~/hooks';

const Layout = () => {
  const isAuth = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) return navigate('/signup');
  }, []);

  return (
    <div className="manager-platform">
      <Header />
      <div className="layout-body">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
