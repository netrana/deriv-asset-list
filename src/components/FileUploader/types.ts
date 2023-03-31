import React from 'react';
import { UploadFile } from 'antd/lib/upload/interface';
import { UploadProps } from 'antd/lib/upload/Upload';

export interface Props extends UploadProps {
  name: string;
  fileType?: string;
  onUpload: (formData: FormData) => void;
  isDragger?: boolean;
  setUploadedFiles?: React.Dispatch<React.SetStateAction<UploadFile[]>>;
}
