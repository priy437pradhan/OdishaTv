import React, { Suspense } from 'react';
import MobilePopup from '../components/MobilePopUp';
const HomeFirstComponent = React.lazy(() => import('../components/HomeFirstComponent'));

function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <HomeFirstComponent />
    </Suspense>
  <MobilePopup />
  </>
  );
}

export default Home;
