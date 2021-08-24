import React from "react";
import UserHeader from "./UserHeader";

interface Type {
  sidebarOpen: any;
  setSidebarOpen: any;
  profile: any;
  setProfile: any;
}
function Header(props: Type) {
  const { sidebarOpen, setSidebarOpen, profile, setProfile } = props;
  return (
    <header className="sticky top-0 bg-blue-900 border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-200 hover:text-gray-50 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
          <UserHeader profile={profile} setProfile={setProfile} />
        </div>
      </div>
    </header>
  );
}

export default Header;
