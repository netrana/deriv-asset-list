/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionCreatorsMapObject,
  bindActionCreators,
  AsyncThunkAction,
  unwrapResult,
} from '@reduxjs/toolkit';
import { DependencyList, useMemo, useCallback } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = <TAction, T extends ActionCreatorsMapObject<TAction>>(
  actions: T,
  deps: DependencyList = [],
) => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch, ...deps]);
};

export const useUnwrapAsyncThunk = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    <R extends any>(asyncThunk: AsyncThunkAction<R, any, any>): Promise<R> =>
      dispatch(asyncThunk).then(unwrapResult),
    [],
  );
};
