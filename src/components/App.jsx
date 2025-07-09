import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import GlobalAlert from "./GlobalAlert";
import Layout from "./Layout/Layout";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? <div>Refreshing user...</div> : <Layout />}
      <GlobalAlert />
    </>
  );
}

export default App;
