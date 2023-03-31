import React, { ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import { Form, Pagination, Table } from 'antd';

import { columnConfiguration, onRowConfig } from './helpers';
import { Props } from './types';

import { DEFAULT_PAGE_SIZE } from './constants';
import styles from './ixTable.module.scss';

export const XTable = <T extends {}, K>(props: Props<T, K>): ReactElement<Props<T, K>> => {
  const {
    data,
    columns: antdColumns,
    empty,
    formConfig,
    pagination,
    onRowClick,
    tableClassName,
    rowClassName,
    loading,
    rowSelection,
    dataCy,
    showPointerOnRowHover = false,
  } = props;
  const columns = columnConfiguration(antdColumns);

  const tableClassNames = classNames(styles.table, {
    tableClassName: Boolean(tableClassName),
    [styles.showPointer]: showPointerOnRowHover,
  });

  const table = (
    <>
      <Table
        className={tableClassNames}
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        rowClassName={rowClassName}
        onRow={onRowConfig(onRowClick)}
        locale={{ emptyText: empty }}
        loading={loading}
        rowSelection={rowSelection}
        data-cy={dataCy}
      />
      {pagination && pagination.count > 0 && (
        <div className={styles.pagination}>
          <Pagination
            current={pagination.currentPage}
            pageSize={pagination.limit || DEFAULT_PAGE_SIZE}
            total={pagination.count}
            onChange={pagination.onChange}
            size="small"
            showSizeChanger={false}
            showQuickJumper={false}
            defaultCurrent={pagination.defaultCurrent}
          />
        </div>
      )}
    </>
  );

  const initialValues = formConfig?.initialValues;
  const handleOnValueChange = formConfig?.onValuesChange;

  useEffect(() => {
    if (!initialValues || !formConfig) {
      return;
    }
    formConfig.antdForm.resetFields();
  }, [initialValues]);

  return (
    <div>
      {formConfig ? (
        <Form
          form={formConfig.antdForm}
          initialValues={formConfig.initialValues}
          onValuesChange={handleOnValueChange}
        >
          {table}
        </Form>
      ) : (
        table
      )}
    </div>
  );
};

export default XTable;
