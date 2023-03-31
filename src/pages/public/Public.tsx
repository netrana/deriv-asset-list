import React from 'react';
import { Outlet, Route } from 'react-router-dom';

import { ROUTES } from 'shared/routes/constants';
import Content from 'uicontainers/_shared/layout/Content';
import Home from 'uicontainers/home';

const PublicLayout = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

const Public = () => {
  return (
    <Route path={ROUTES.PATHS.ROOT} element={<PublicLayout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.PATHS.ASSERTS} element={<Home />} />
    </Route>
  );
};

export default Public;
