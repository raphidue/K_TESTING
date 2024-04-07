import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="mx-auto">
        <ul className="flex h-16 items-center">
          <li className="px-8">
            <Link to="/">Homepage</Link>
          </li>
          <li className="px-8">
            <Link to="/category/1">Category</Link>
          </li>
          <li className="px-8">
            <Link to="/product/:id">Product</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;