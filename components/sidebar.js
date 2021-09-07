import React from "react";

const Sidebar = () => {
  return (
    <div className="my-body-sidebar p-4">
      <h3 className="is-size-4">Trourbleshoot</h3>
      <ul>
        <li>Make sure the CAPS Lock is off.</li>
        <li>Clear your browser cache and cookies.</li>
        <li>
          Make sure the internet connection is avaiable and you’re definitely
          online before trying again. Avoid using VPN.
        </li>
        <li>
          In case you have forgot your password then follow these instructions.
        </li>
        <li>
          If you still can’t get into your account, contact us and we’ll be in
          touch to help you as soon as we can.
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
