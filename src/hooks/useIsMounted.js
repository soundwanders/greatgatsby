import { useRef, useEffect } from 'react';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted;
}


//   const isMounted = useIsMounted();

//     asyncOperation().then(data => {
//      if (isMounted.current) {
//    setState(data);
//  }
// })