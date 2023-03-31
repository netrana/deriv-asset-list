import { GetOnMouseMoveHandler, OnClickHandlerForDisabledState } from './types';

export const getOnMouseMoveHandler: GetOnMouseMoveHandler = (onMouseMove) => (e) => {
  const { clientX, clientY, currentTarget } = e;

  const backgroundPosition = `${clientX - 6}px ${clientY - 6}px`;

  currentTarget.style.setProperty('background-position', backgroundPosition);

  onMouseMove && onMouseMove(e);
};

export const onClickHandlerForDisabledState: OnClickHandlerForDisabledState = (e) => {
  e.stopPropagation();
  e.preventDefault();
};
