import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/helpers';
import Public from 'pages/public';
import NotFound from 'uicontainers/notFound';

import styles from './app.module.scss';

const App = () => {  
  return (
    <Layout className={styles.layout}>
      <Routes>
        {Public()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
