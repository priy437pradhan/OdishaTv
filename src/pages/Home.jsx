import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

const HomeFirstComponent = React.lazy(() => import('../components/HomeFirstComponent'));

function Home() {
  return (
    <Helmet>
    <Suspense fallback={<div>Loading...</div>}>
      <HomeFirstComponent />
    </Suspense>
    </Helmet>

  );
}

export default Home;
