import React from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div className="mr-10 mt-5 flex justify-end items-center divide-x-2">
      <Navbar />
      <UserProfile />
    </div>
  );
};

export default Header;
