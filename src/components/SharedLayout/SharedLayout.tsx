import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const SharedLayout: React.FC = () => {
  return (
      <>
          <Header/>
          <main>
              <Suspense>
					<Outlet />
				</Suspense>
          </main>
          <footer></footer>
      </>
  );
}

export default SharedLayout;