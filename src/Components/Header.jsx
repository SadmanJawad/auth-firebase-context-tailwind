import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-info normal-case text-white text-xl rounded-3xl">it's Auth</a>
      <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Header;
