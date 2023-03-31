import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/routes/constants';

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.PATHS.ROOT, { replace: true });
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
