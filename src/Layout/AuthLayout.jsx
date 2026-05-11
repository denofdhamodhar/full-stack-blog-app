import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setChecked(true);
  }, [authStatus, authentication, navigate]);

  return checked ? <div>{children}</div> : null;
}

export default AuthLayout;
