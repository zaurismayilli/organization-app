import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '@assets/images/logo.gif';

import './index.scss';
import { useAdmin, useAuth } from '~/hooks';

const Header = () => {
  const { user } = useSelector(({ organizeUserReducer }: any) => {
    return {
      user: organizeUserReducer.user?.user,
    };
  });
  const isAdmin = useAdmin();
  const isAuth = useAuth();

  console.log(isAdmin);

  const menuList = [
    {
      path: '/signin',
      title: 'Sign In',
    },
    {
      path: '/taskboard',
      title: 'Taskboard',
    },
    {
      path: '/user-create',
      title: 'User Create',
      isAdmin,
    },
    {
      path: '/organization',
      title: 'Organization',
      isAdmin,
    },
  ];

  return (
    <div className="main-header">
      <div className="main-header__primary">
        <NavLink to="/" className="main-header__primary--logo">
          <img src={logo} alt="Logo" />{' '}
        </NavLink>
        <ul className="main-header__primary--navigation">
          {menuList.map(({ title, isAdmin, path }) => {
            console.log(isAdmin);
            return (
              <Fragment key={path}>
                {isAuth && (isAdmin || isAdmin == undefined) && (
                  <li>
                    <NavLink to={path}> {title} </NavLink>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="main-header__secondary">
        <ul className="main-header__primary--navigation">
          <li>{isAdmin ? user?.email : <Link to="/signup"> Sign Up </Link>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
