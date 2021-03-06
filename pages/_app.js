
// pages/_app.js

import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;