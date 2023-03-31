import { useMediaQuery } from 'react-responsive';
import { BREAKPOINT, TAB_BREAKPOINT } from 'shared/constants/responsive';

export const useIsMobile = () => useMediaQuery({ query: `(max-width: ${BREAKPOINT}px)` });
export const useIsTab = () => useMediaQuery({ query: `(max-width: ${TAB_BREAKPOINT}px)` });
