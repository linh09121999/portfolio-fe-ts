import React, { Suspense } from 'react';
import { Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';

import { Footer, Header, BackToTop } from './components';

const Page404 = React.lazy(() => import('./view/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./view/pages/page500/Page500'));

const Home = React.lazy(() => import('./view/portfolio/index'));

const ProtectedRoute: React.FC = () => {
  // const { isMobile } = useGlobalContext();
  return (
    <div className="flex flex-col w-full h-[100vh]" >
      {/* <!-- Header --> */}
      <BackToTop />
      <Header />
      <Outlet />
      <Footer />

    </div>

  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
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
