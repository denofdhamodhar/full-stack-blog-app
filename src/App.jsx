import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import AuthServices from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCurrentUserDetails() {
      await AuthServices.getCurrentUser().then((status) => {
        if (status) {
          dispatch(login({ userData: status }));
        } 
      });
    }
    getCurrentUserDetails();
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
