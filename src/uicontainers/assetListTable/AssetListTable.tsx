import React from 'react';

import IXTable from 'components/tables/IXTable';
import { useAppSelector } from 'store/hooks';

import styles from './assetListTable.module.scss';
import { COLUMNS } from './constants';
import { createSelectAssetListTableData } from './selectors';

const AssetListTable = () => {
  const assetTableData = useAppSelector(createSelectAssetListTableData);

  return (
    <div className={styles.bodyContainer}>
      <IXTable
        data={assetTableData}
        columns={COLUMNS}
      />
    </div>
  );
};

export default AssetListTable;
