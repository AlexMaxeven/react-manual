import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DelayedRedirect = ({ to, delay = 5000 }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, to, delay]);

  return null;
};

export default DelayedRedirect;