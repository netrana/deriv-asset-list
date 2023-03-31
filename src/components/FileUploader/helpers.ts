import { UploadChangeParam } from 'antd/lib/upload';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { message } from 'antd';

export const onChange = (info: UploadChangeParam<UploadFile>) => {
  if (info.file.status === 'done') {
    //message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};

export const beforeUpload = (fileType?: string) => (file: RcFile) => {
  if (
    fileType === 'image' &&
    file.type.slice(0, file.type.indexOf('/')) !== 'image'
  ) {
    message.error(`File must be a valid image `);
  } else if (
    file.type.slice(0, file.type.indexOf('/')) !== 'image' &&
    file.type !== 'application/pdf'
  ) {
    message.error(`File must be image or pdf`);
  } else {
    return true;
  }
};

export const onUploadHandler = (name: string, onUpload: Function) => (
  options: any
) => {
  const { file, onSuccess, onError, onProgress } = options;


  const formData = new FormData();
  formData.append(name, file);

  onProgress({ percent: 40 });
  onUpload(formData)
    .then(() => {
      onSuccess(null,file);
    })
    .catch(() => {
      onError(null, null);
    });
};
