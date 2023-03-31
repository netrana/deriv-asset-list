import React from 'react';
import { notification as antdNotification } from 'antd';
import { AxiosError } from 'axios';
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import isEmpty from 'lodash/isEmpty';
import _ from 'lodash';

export interface NotificationParams {
  type: 'success' | 'info' | 'warning' | 'error';
  description: string;
  title?: string;
}

export const formatValidationErrorMessage = (error: {
  errorFields: { errors: string[] }[];
}) => {
  let message = '';
  error.errorFields.forEach((e) => {
    const errors = e.errors || [];
    errors.forEach((m) => {
      message += m + '\n';
    });
  });
  return message;
};

export const formatHTTPErrorTitle = (error: AxiosError) => {
  const statusCode = error?.response?.status;
  if (!statusCode) {
    return 'Connectivity Lost';
  }
  return `HTTP Error: ${statusCode}`;
};

export const formatHTTPErrorMessage = (error: AxiosError) => {
  let message = error.message;
  const statusCode = error?.response?.status;
  const data = error?.response?.data || {};
  if (!isEmpty(data)) {
    if (data?.error_data && _.isString(data?.error_data)) {
      message = data.error_data;
    } else if (statusCode === 404) {
      message = data.error_data.url;
    } else if (statusCode === 400 || statusCode === 403) {
      const array: string[] = [];
      if (_.isArray(data?.error_data)) {
        data?.error_data.forEach((data: string) => {
          array.push(data);
        });
      } else {
        const keys = Object.keys(data?.error_data);
        keys.forEach((key, index) => {
          if (data?.error_data[key]?.join) {
            if (key === 'non_field_errors') {
              array.push(`${data?.error_data[key].join('-')}`);
            } else {
              array.push(
                `${key.replaceAll('_', ' ')}: ${data?.error_data[key].join(
                  '-'
                )}`
              );
            }
          }
        });
      }

      message = array.join('\n');
    } else if (statusCode === 401) {
      message = data.error_data.detail;
    }
  }
  return message;
};

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
  });
};
