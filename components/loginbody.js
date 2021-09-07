import React from "react";
import Link from "next/link";

const Loginbody = ({ posts }) => {
  return (
    <div className="container content p-3 columns is-flex-wrap-wrap mx-auto">
      {posts.map((p) => (
        <Link href={`portals/${p.url}`} passHref>
          <div className="column is-3 my-body-content m-2">
            <h3 className="is-centered my-linker">
              {p.name} {p.postfix}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Loginbody;
