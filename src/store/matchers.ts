import { Action, AnyAction } from '@reduxjs/toolkit';

export function isPendingActionMatcher(action: AnyAction): action is Action {
  return action.type?.endsWith('pending');
}

export function isFulfilledActionMatcher(action: AnyAction): action is Action {
  return action.type?.endsWith('fulfilled');
}
