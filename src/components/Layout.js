import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 12px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Wrapper>
  );
};
