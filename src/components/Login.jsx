import { useForm } from "react-hook-form";
import Container from "../Layout/Container";
import Input from "./Input";
import Button from "./Button";
import AuthServices from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/slice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  async function loginfn(data) {
    const result = await AuthServices.loginAccount(data);
    if (result) {
      dispatch(login({ userData: result }));
      navigate("/")
    }
  }
  return (
    <Container>
      <div className="w-full max-w-70 xs:max-w-xs  md:max-w-sm shadow-lg backdrop-blur-2xl shadow-slate-400/50 lg:px-10 px-4 py-10 my-10 lg:my-20 border-2 rounded-xl border-amber-400 mx-auto">
        <h1 className="font-subheadings text-center text-xl font-bold">INK <span className="text-white bg-red-500 px-2 rounded-md">WELL</span> BLOGS</h1>
        <h1 className="text-sm font-bold font-subheadings text-center mt-1 pb-6 lg:pb-8 font-paragraph">
          Login your account
        </h1>
        <form onSubmit={handleSubmit(loginfn)}>
          <Input
            label="Email :"
            type="email"
            placeHolder="Enter Email Address"
            {...register("email", { required: true })}
          />
          <Input
            label="Password :"
            type="password"
            placeHolder="Enter Password"
            {...register("password", { required: true })}
          />
          <Button className={"w-full hover:bg-green-800 shadow-lg backdrop-blur-2xl shadow-green-400/60 mt-2"} label="Login" bgColor="bg-green-500" type="submit" />
        </form>
      </div>
    </Container>
  );
}

export default Login;
