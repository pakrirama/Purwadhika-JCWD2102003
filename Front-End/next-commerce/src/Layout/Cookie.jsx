import jsCookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import auth_types from "../Redux/Reducers/auth/types";
import { useEffect, useState } from "react";

export default function Cookie({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDataUser = jsCookie.get("user_data");
    if (savedDataUser) {
      const realData = JSON.parse(savedDataUser);

      dispatch({
        type: auth_types.USER_LOGIN,
        payload: realData,
      });
    }
    setIsAuth(true);
  }, []);

  if (!isAuth) return <div>loading</div>;
  return children;
}
