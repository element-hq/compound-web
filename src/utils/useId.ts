import * as React from 'react';

const react18UseId = (React as { useId?: () => string }).useId;

const getUniqueId = (() => {
  let index = 1;
  return () => `:r${index++}:`;
})();

const useIdPonyFill = (): string => {
  return React.useMemo(getUniqueId, []);
};

const useId = (typeof react18UseId === "function") ? react18UseId : useIdPonyFill;

export default useId;
