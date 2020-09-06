import React from 'react';
import Loader from './components/loader/Loader';

interface AppProps {}

const App = ({}: AppProps)  => {
  return (
    <>
      {true && <Loader />}
    </>
  );
}

export default App;
