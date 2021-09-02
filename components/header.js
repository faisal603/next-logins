import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="navbar px-6 is-link" role="navigation">
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
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/" passHref>
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/posts" passHref>
            <a className="navbar-item">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
