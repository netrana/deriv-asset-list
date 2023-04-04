import React from 'react';

import { useGetActiveSymbols } from 'api/symbols/hooks';
import { Space, Spin } from 'components/helpers';
import { useAppSelector } from 'store/hooks';
import { selectGetSymbolRequestStatus } from 'store/symbols/selectors';
import AssetCategoryFilter from 'uicontainers/assetCategoryFilter';
import AssetListTable from 'uicontainers/assetListTable';
import AssetSubCategoryFilter from 'uicontainers/assetSubCategoryFilter';

import styles from './Home.module.scss';

const Home = () => {
  const isLoading = useAppSelector(selectGetSymbolRequestStatus) === 'started';

  const getActiveSymbols = useGetActiveSymbols();

  React.useEffect(() => {
    getActiveSymbols();
  }, []);
  
  return (
    <div className={styles.bodyContainer}>
      <Spin spinning={isLoading}>
        <AssetCategoryFilter />
        <Space direction='vertical' size='large' className={styles.fullWith}>
          <AssetSubCategoryFilter />
          <AssetListTable />
        </Space>
      </Spin>
    </div>
  );
};

export default Home;
