import { useMemo } from "react";

export const useCars = (cars, sort) => {
  const memoizedCars = useMemo(() => {
    if (sort) {
      return [...cars].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return cars;
  }, [sort, cars]);

  return memoizedCars;
};
