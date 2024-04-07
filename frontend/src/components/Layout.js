import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="text-3xl font-bold underline">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/category/1">Category</Link>
          </li>
          <li>
            <Link to="/product/:id">Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
