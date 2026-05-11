import { useSelector } from "react-redux";
import Logo from "../../assets/logo1.png";
import { Link, NavLink } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useState } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: !authStatus,
    },
    {
      name: "Home",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="w-full bg-amber-400 sticky top-0 z-30 overflow-x-hidden">
      <nav className="h-20 lg:h-24 flex justify-between items-center px-4 md:px-6 lg:px-8 xl:px-14">
        <Link to="/">
          <img className="w-12 h-12 lg:w-14 lg:h-14" src={Logo} alt="Logo" />
        </Link>
        <div className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-9"
            onClick={() => setOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <ul className="flex list-none gap-x-12 items-center">
            {navItems.map((item) =>
              item.active ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "cursor-pointer underline-offset-8 underline decoration-wavy decoration-white text-lg text-white"
                      : "cursor-pointer"
                  }
                  to={item.slug}
                  key={item.name}
                >
                  <li className="font-medium font-paragraph">{item.name}</li>
                </NavLink>
              ) : null,
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </div>
      </nav>

      {open && (
        <aside
          className={`block lg:hidden min-h-screen overflow-hidden w-full z-40 bg-white fixed top-0 transition-all duration-300 ease-out
    ${open ? "opacity-100 visible" : "opacity-0 invisible delay-150"}`}
        >
          <div
            className={`w-4/5 bg-amber-400 min-h-screen backdrop-blur-3xl shadow-xl shadow-black/30 fixed top-0 z-50 transition-transform duration-300 ease-out
      ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <nav className="h-20 flex justify-between items-center px-4 md:px-6">
              <Link to="/" onClick={() => setOpen(false)}>
                <img
                  className="w-12 h-12 lg:w-14 lg:h-14"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
              <div className="block lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-9"
                  onClick={() => setOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </nav>
            <div>
              <ul className="flex flex-col pt-14 sm:pt-20 md:pt-28 md:text-lg list-none gap-y-10 items-center">
                {navItems.map((item) =>
                  item.active ? (
                    <NavLink
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "cursor-pointer underline-offset-8 underline decoration-wavy decoration-white text-lg text-white"
                          : "cursor-pointer"
                      }
                      to={item.slug}
                      key={item.name}
                    >
                      <li className="font-semibold font-paragraph">
                        {item.name}
                      </li>
                    </NavLink>
                  ) : null,
                )}
                {authStatus && (
                  <div onClick={() => setOpen(false)}><LogoutBtn /></div>
                )}
              </ul>
            </div>
          </div>
        </aside>
      )}
    </header>
  );
}

export default Header;
