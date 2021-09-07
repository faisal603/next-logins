import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="navbar px-6 my-header" role="navigation">
      <div className="navbar-brand py-1">
        <Link href="/" passHref>
          <figure className="image is-64x64">
            <Image
              src="https://res.cloudinary.com/haaji/image/upload/v1630474805/games4info_xvk0rg.png"
              alt="logo"
              width={64}
              height={64}
            />
          </figure>
        </Link>
        <h2 className="has-text-white mt-2 mx-2 is-size-3">
          Logins Portal Helper
        </h2>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/" passHref>
            <a className="navbar-item has-text-white">Home</a>
          </Link>
          <Link href="/portals" passHref>
            <a className="navbar-item has-text-white">portals</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
