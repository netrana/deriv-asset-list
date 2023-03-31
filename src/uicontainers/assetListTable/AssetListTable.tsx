import React from 'react';

import XTable from 'components/tables/XTable';
import { useAppSelector } from 'store/hooks';

import styles from './assetListTable.module.scss';
import { COLUMNS } from './constants';
import { createSelectAssetListTableData } from './selectors';

const AssetListTable = () => {
  const assetTableData = useAppSelector(createSelectAssetListTableData);

  return (
    <div className={styles.bodyContainer}>
      <XTable
        data={assetTableData}
        columns={COLUMNS}
      />
    </div>
  );
};

export default AssetListTable;
