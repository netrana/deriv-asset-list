import React from 'react';
import { notification as antdNotification } from 'antd';
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

export interface NotificationParams {
  type: 'success' | 'info' | 'warning' | 'error';
  description: React.ReactNode;
  title?: string;
}

export const notification = (params: NotificationParams) => {
  const { type, description, title } = params;
  const icons = {
    success: <CheckCircleOutlined style={{ color: 'green' }} />,
    error: <CloseCircleOutlined style={{ color: 'red' }} />,
    info: <InfoCircleOutlined style={{ color: 'gray' }} />,
    warning: <ExclamationCircleOutlined style={{ color: 'yellow' }} />,
  };
  const defaultTitle = {
    success: 'Success',
    error: 'Error',
    info: 'Info',
    warning: 'Warning',
  };
  antdNotification[type]({
    message: title || defaultTitle[type],
    description,
    placement: 'bottomRight',
    icon: icons[type],
    duration: 0,
  });
};
