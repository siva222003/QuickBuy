import React, { useState } from "react";
import { logoutUser } from "../app/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import MobileMenuButton from "../components/Navbar/MobileMenuButton";
import Logo from "../components/Navbar/Logo";
import DesktopLinks from "../components/Navbar/DesktopLinks";
import CartButton from "../components/Navbar/CartButton";
import ProfileDropdown from "../components/Navbar/ProfileDropdown";
import DropdownData from "../components/Navbar/DropdownData";
import MobileMenu from "../components/Navbar/MobileMenu";
const Navbar = () => {
  const dispatch = useDispatch();
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = () => {
    dispatch(logoutUser());
  };
  const state = useSelector((state) => state.cart);
  const { data } = state;

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-10 ${mobileMenu ? '' : 'h-16'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />

            <DesktopLinks />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartButton data={data} />

            {/* <!-- Profile dropdown --> */}
            <div
              className="relative ml-3"
              onClick={() => setProfileMenu(!profileMenu)}
            >
              <ProfileDropdown />

              <DropdownData
                handleClick={handleClick}
                profileMenu={profileMenu}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <MobileMenu mobileMenu={mobileMenu}/>
    </nav>
  );
};

export default Navbar;
