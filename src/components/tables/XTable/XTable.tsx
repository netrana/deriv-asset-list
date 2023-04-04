import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { columnConfiguration } from './helpers';
import { Props } from './types';

import styles from './xTable.module.scss';
import { Table } from 'components/helpers';

export const XTable = <T extends {}, K>(props: Props<T, K>): ReactElement<Props<T, K>> => {
  const {
    data,
    columns: antdColumns,
    empty,  
    tableClassName,
    rowClassName,
    loading,
    showPointerOnRowHover = false,
  } = props;
  const columns = columnConfiguration(antdColumns);

  const tableClassNames = classNames(styles.table, {
    tableClassName: Boolean(tableClassName),
    [styles.showPointer]: showPointerOnRowHover,
  });

  return (
    <Table
      className={tableClassNames}
      dataSource={data}
      columns={columns}
      pagination={false}
      scroll={{ x: true }}
      rowClassName={rowClassName}
      locale={{ emptyText: empty }}
      loading={loading}
    />
  );
};

export default XTable;
