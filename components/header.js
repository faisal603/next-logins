import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar px-6 is-link" role="navigation">
      <div className="navbar-brand py-1">
        <Link href="/">
          <figure className="image is-64x64">
            <img src="https://res.cloudinary.com/haaji/image/upload/v1630474805/games4info_xvk0rg.png" />
          </figure>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/posts">
            <a className="navbar-item">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
