import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.png";

function Footer() {
  return (
    <footer>
      <div className="h-auto py-8 md:py-10 lg:py-12 w-full bg-black text-white flex flex-col justify-center items-center gap-y-2">
        <Link to="/">
          <img
            className="w-12 h-12 lg:w-16 lg:h-16 mb-1"
            src={Logo}
            alt="Logo"
          />
        </Link>
        <Link to="/">
          <p className="flex justify-center items-center gap-x-1">
            <span className="text-red-500 font-bold text-xs lg:text-sm">
              &copy; 2026
            </span>{" "}
            <span className="font-bold text-sm lg:text-lg  text-amber-500">
              INK WELL BLOGS{" "}
            </span>
          </p>
          <p className="text-center text-xs lg:text-sm font-medium lg:leading-3.5">
            All rights reserved.
          </p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
