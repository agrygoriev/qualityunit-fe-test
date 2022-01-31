import React, { Suspense, lazy} from 'react';
import useWindowSize from 'utils/useWindowSize';

const PageDesktop = lazy(() => import('pages/PageDesktop.jsx'));
const PageMobile = lazy(() => import('pages/PageMobile.jsx'));
const PageTablet = lazy(() => import('pages/PageTablet.jsx'));

function App() {
  const { width } = useWindowSize();
  let device = '';
  console.log(width);
  if (width < 426) {
    device = 'mobile';
  } else if (width > 425 && width < 1181) {
    device = 'tablet';
  } else {
    device = 'desktop'
  }
  return (
    <div className="App">
      { device === 'desktop' && (
        <Suspense fallback={<div>Loading...</div>}>
          <PageDesktop />
        </Suspense>
      )}
      { device === 'mobile' && (
        <Suspense fallback={<div>Loading...</div>}>
          <PageMobile />
        </Suspense>
      )}
      { device === 'tablet' && (
        <Suspense fallback={<div>Loading...</div>}>
          <PageTablet />
        </Suspense>
      )}
    </div>
  );
}

export default App;