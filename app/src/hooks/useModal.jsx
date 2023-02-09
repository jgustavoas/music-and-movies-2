import { useEffect } from 'react';

export function useModal(toggle) {
  useEffect(() => {
    return () => toggle;
  }, [toggle]);

  return toggle;
}
