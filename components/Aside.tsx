import React from "react";

type Props = {
  name?: string;
};

const Aside = ({ name }: Props) => {
  return (
    <div className="w-16 border-r-2 h-screen flex flex-col items-center">
      <div className="mt-3">
        {/* Logo */}
        <svg
          width="30"
          height="4 7"
          viewBox="0 0 18 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0C2.79813 -1.00455e-07 5.07376 0.452652 7.19696 1.33211C9.32016 2.21156 11.2493 3.50061 12.8744 5.12563C14.4994 6.75066 15.7884 8.67984 16.6679 10.803C17.5474 12.9262 18 15.2019 18 17.5C18 19.7981 17.5474 22.0738 16.6679 24.197C15.7884 26.3202 14.4994 28.2493 12.8744 29.8744C11.2493 31.4994 9.32016 32.7884 7.19696 33.6679C5.07376 34.5473 2.79813 35 0.5 35L0.500001 17.5L0.5 0Z"
            fill="#1E1E1F"
          />
        </svg>
      </div>
      <ul className="mt-72 space-y-7">
        <li>
          <img src="/upload1.png" alt="upload-img" className="h-7 w-7" />
        </li>
        <li>
          <img src="/manage.png" alt="manage-img" className="h-7 w-7" />
        </li>
        <li>
          <img src="/settings.png" alt="setting-img" className="h-7 w-7" />
        </li>
      </ul>
    </div>
  );
};

export default Aside;
