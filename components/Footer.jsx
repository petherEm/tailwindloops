import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src="/images/logo.svg" className="w-44 md:ml-3" alt="" />
            </div>

            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div className="h-10 group">
                <Link href="#">
                  <a>About</a>
                </Link>

                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 2 */}
              <div className="h-10 group">
                <Link href="#">
                  <a>Events</a>
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 3 */}
              <div className="h-10 group">
                <Link href="#">
                  <a>Products</a>
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 4 */}
              <div className="h-10 group">
                <Link href="#">
                  <a>Support</a>
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* Social & Copy */}

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Icons Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* Icon 1 */}
              <div className="h-8 group">
                <Link href="#">
                  <img src="/images/icon-facebook.svg" alt="" className="h-6" />
                </Link>
              </div>
              {/* Icon 2 */}
              <div className="h-8 group">
                <Link href="#">
                  <img src="/images/icon-twitter.svg" alt="" className="h-6" />
                </Link>
              </div>
              {/* Icon 3 */}
              <div className="h-8 group">
                <Link href="#">
                  <img
                    src="/images/icon-pinterests.svg"
                    alt=""
                    className="h-6"
                  />
                </Link>
              </div>
              {/* Icon 4 */}
              <div className="h-8 group">
                <Link href="#">
                  <img
                    src="/images/icon-instagram.svg"
                    alt=""
                    className="h-6"
                  />
                </Link>
              </div>
            </div>

            {/* Copy */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
