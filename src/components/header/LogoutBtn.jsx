import { useDispatch } from "react-redux";
import AuthServices from "../../appwrite/auth";
import { logout } from "../../store/slice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function logoutfn() {
      await AuthServices.logout();
        dispatch(logout());
        navigate("/")
    }
  return (
    <button onClick={logoutfn} className="px-4 py-2 cursor-pointer rounded-xl bg-red-500 text-white font-semibold lg:font-medium font-paragraph ">
      Logout
    </button>
  );
}

export default LogoutBtn;
