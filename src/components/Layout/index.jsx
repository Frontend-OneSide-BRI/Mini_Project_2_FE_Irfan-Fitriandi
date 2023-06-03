import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <nav>Navbar</nav>
      <main className="lg:w-[1400px] lg:mx-auto m-4">{children}</main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
