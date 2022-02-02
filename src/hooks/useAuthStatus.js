import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [loading, setLoading] = useState(true);
  const _isMounted = useRef(true);

  useEffect(() => {
    if (_isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setLoading(false);
      });
    }
    return () => {
      _isMounted.current = false;
    };
  }, [_isMounted]);
  return { loggedIn, loading };
};
