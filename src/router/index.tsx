import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const TaskBoard = lazy(() => import('~/pages/taskboard/index'));
const Organization = lazy(() => import('~/pages/organization'));
const TaskBoardCreate = lazy(() => import('~/pages/taskboard/create'));
const TaskBoardList = lazy(() => import('~/pages/taskboard/list'));
const SignIn = lazy(() => import('~/pages/signin'));
const SignUp = lazy(() => import('~/pages/signup'));
const UserCreate = lazy(() => import('~/pages/user-create'));
const Layout = lazy(() => import('~/layout'));
const Loading = lazy(() => import('~/components/Loading'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/user-create" element={<UserCreate />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/taskBoard" element={<TaskBoard />}>
              <Route path="/taskBoard/create" element={<TaskBoardCreate />} />
              <Route path="/taskBoard/list" element={<TaskBoardList />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
