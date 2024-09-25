import { useState, useEffect } from "react";

function useLoader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return showLoader;
}

export default useLoader;
