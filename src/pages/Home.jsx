import React, { Suspense } from 'react';

const HomeFirstComponent = React.lazy(() => import('../components/HomeFirstComponent'));

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeFirstComponent />
    </Suspense>
  );
}

export default Home;
