import React from 'react';

import { useGetTicksHistory } from 'api/ticksHistory/hooks';
import { TickHistoryStyle, TicksHistoryRequest } from 'api/ticksHistory/types';
import XTable from 'components/tables/XTable';
import { useAppSelector } from 'store/hooks';

import styles from './assetListTable.module.scss';
import { COLUMNS } from './constants';
import { createSelectAssetList, createSelectAssetListTableData } from './selectors';

const AssetListTable = () => {
  const assetTableData = useAppSelector(createSelectAssetListTableData);
  const selectedSymbols = useAppSelector(createSelectAssetList);
  const getTicksHistory = useGetTicksHistory();

  React.useEffect(() => {
    selectedSymbols.forEach((symbol) => {
      const ticks_history_request: TicksHistoryRequest = {
        ticks_history: symbol.symbol,
        adjust_start_time: 1,
        granularity: 7200,
        end: "latest",
        start: 1,
        style: TickHistoryStyle.CANDLES,
      };
      getTicksHistory(ticks_history_request);
    })
  }, [selectedSymbols]);

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
