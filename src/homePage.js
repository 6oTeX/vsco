import React from "react";
import Nav from "./components/nav";
import { useState } from "react";

const HomePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className="flex bg-black">
      <Nav isUser={isSidebarExpanded} handleToggle={handleToggleSidebar} />

      <div
        className={`flex justify-center w-full transition-all duration-300 ${
          isSidebarExpanded ? "ml-16" : "ml-52"
        }`}>
        <div className="flex flex-col bg-black">
          <div className="h-screen ">
            <header>
              <div className="flex justify-start w-fit ">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/6630400301b75510934b338b_tools-cover-image%402x-p-2000.jpg"
                    alt="VSCO Editing Tools"
                    className=""
                  />
                </div>
                <div className="absolute top-36 left-64">
                  <h2 className="text-6xl text-white ">Community + Profile</h2>
                  <p className="w-1/2 mt-3 text-xl font-normal">
                    Share your vision and build authentic connections with a
                    global community of photographers.
                  </p>
                </div>
              </div>
            </header>
            <div className="h-full bg-black">
              {/* Parent container */}
              <div className="flex items-start justify-start w-full h-full font-bold flex-colum">
                {/* Parent text  */}
                <div className="flex flex-row w-full mt-20 justify-evenly h-1/4">
                  <h2 className="text-3xl text-white ">
                    {" "}
                    Community + Profile
                    <p className="mt-3 text-base font-normal max-w-80 bottom-52-5 text-ellipsis">
                      Share your vision and build authentic connections with a
                      global community of photographers.
                    </p>
                    <img
                      className="object-cover mt-10 h-72 "
                      src="https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/662acf7f2778ca98ba801498_hp-community-profile-cover%402x-p-500.jpg"
                      onerror="went something wrong"></img>
                    <p className="h-20 bg-black border-none ">
                      Community+profile
                    </p>
                  </h2>

                  {/* Other items */}
                  <h2 className="text-3xl text-white">
                    {" "}
                    Quality creative tools
                    <p className="mt-3 text-base font-normal max-w-80 bottom-52-5 text-ellipsis">
                      Mobile and desktop photo editing tools to help you define
                      and express your photography style.
                    </p>
                    <img
                      className="mt-10 h-72"
                      src="https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/662acf7f2778ca98ba801498_hp-community-profile-cover%402x-p-500.jpg"
                      onerror="went something wrong"></img>
                    <p className="border ">Community+profile</p>
                  </h2>

                  <h2 className="text-3xl text-white ">
                    {" "}
                    VSCO hub forwork
                    <p className="mt-3 text-base font-normal max-w-80 bottom-52-5 text-ellipsis">
                      Smart job matching for businesses looking to hire a
                      photographer for their next project or campaign.
                    </p>
                    <img
                      className="object-cover mt-10 h-72 "
                      src="https://cdn.prod.website-files.com/64e27cdd42db7ecf119d5e61/662acf7f2778ca98ba801498_hp-community-profile-cover%402x-p-500.jpg"
                      onerror="went something wrong"></img>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
