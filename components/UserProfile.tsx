import React from "react";

type Props = {
  name?: string;
};

const UserProfile = ({ name }: Props) => {
  return (
    <div className="flex items-center space-x-7">
      <p className="text-[14px] font-medium ml-5">Shekh AI Raihan</p>
      <span className="outline-2 outline rounded-full p-[2px] outline-secondary">
        <img src="/user.png" alt="user-img" className="w-10 h-10" />
      </span>
    </div>
  );
};

export default UserProfile;
