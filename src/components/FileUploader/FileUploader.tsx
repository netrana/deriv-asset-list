import React, { FC } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import { UploadProps } from 'antd/lib/upload/Upload';

import { Props } from './types';
import styles from './fileUploader.module.scss';

import { onChange, beforeUpload, onUploadHandler } from './helpers';

const FileUploader: FC<Props> = (props) => {
  const { Dragger } = Upload;

  const {
    children,
    name,
    onUpload,
    fileType,
    isDragger,
    ...otherProps
  } = props;

  const fileUploadProps: UploadProps = {
    name,
    beforeUpload: beforeUpload(fileType),
    onChange: onChange,
    customRequest: onUploadHandler(name, onUpload),
  };

  const Uploader = () => {
    return isDragger ? (
      <Dragger {...otherProps} {...fileUploadProps}>
        {children}
      </Dragger>
    ) : (
      <Upload {...fileUploadProps} {...otherProps}>
        {children}
      </Upload>
    );
  };

  return (
    <div className={styles.uploader}>
      {fileType === 'image' ? (
        <ImgCrop rotate={true} aspect={3 / 2}>
          {isDragger ? (
            <Dragger {...otherProps} {...fileUploadProps}>
              {children}
            </Dragger>
          ) : (
            <Upload {...fileUploadProps} {...otherProps}>
              {children}
            </Upload>
          )}
        </ImgCrop>
      ) : (
        <Uploader />
      )}
    </div>
  );
};

export default FileUploader;
