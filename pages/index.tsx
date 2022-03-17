import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Aside />
        <div className="w-full">
          <Header />
          {/* Home Page */}
          <div className="flex flex-col items-center mt-96 container mx-auto space-y-5">
            <div className="flex items-center justify-center space-x-4">
              <input
                type="url"
                className="bg-input_bg border-0 rounded-lg placeholder:font-semibold p-5 placeholder:text-dark_gray outline-none placeholder:text-[18px] focus:outline-none w-[296px]"
                placeholder="Enter source videos URLs"
              />
              <div className="bg-gradient-to-b p-2 w-[153px] h-[51px] text-center from-primary to-tertiary  rounded-full border-[1.4px] border-btn_border flex justify-center items-center hover:bg-gradient-to-b hover:from-gray-200 hover:to-gray-300 duration-500">
                <input type="file" className="hidden" id="fetch" />
                <label htmlFor="fetch" className="cursor-pointer font-medium">
                  Fetch Videos
                </label>
              </div>
            </div>
            <h3 className="text-[17.36px] font-semibold">OR</h3>
            <div className="bg-gradient-to-b w-[474px] p-5 text-center from-primary to-tertiary border-[1.4px] border-btn_border rounded-full hover:bg-gradient-to-b hover:from-gray-200 hover:to-gray-300 duration-500">
              <label
                htmlFor="upload"
                className="cursor-pointer w-full flex items-center justify-center space-x-3"
              >
                <input type="file" className="hidden w-full" id="upload" />
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.74432 6.50822H3.98784C2.33784 6.50822 1 7.84606 1 9.49606L1 13.4488C1 15.098 2.33784 16.4358 3.98784 16.4358H13.0122C14.6622 16.4358 16 15.098 16 13.4488V9.48795C16 7.84282 14.6662 6.50822 13.0211 6.50822H12.2565"
                    stroke="#1E1E1F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 1.00003V10.763"
                    stroke="#1E1E1F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.13647 3.37433L8.49999 1.00027L10.8643 3.37433"
                    stroke="#1E1E1F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-medium">Upload Files</p>
              </label>
            </div>
            <p className="text-dark_gray font-bold">
              Enter one URL per line.You can also add Youtube and Vimeo URLS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
