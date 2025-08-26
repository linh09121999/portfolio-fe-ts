import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';

import { Footer, Header } from './components';

const Home = React.lazy(() => import('./view/index'));

const ProtectedRoute: React.FC = () => {
  // const { isMobile } = useGlobalContext();
  return (
    <div className="flex flex-col w-full h-[100vh] bg-[url(./assets/img/bg.png)] object-cover" >
      {/* <!-- Header --> */}
      <div className='w-[1350px] flex-col mx-auto'>
        <Header />
        <Outlet />
        <Footer />
      </div>

    </div>

  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
};

export default App
