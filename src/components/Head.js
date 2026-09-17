import { Link, Outlet } from "react-router-dom";
import { LOGO_URL } from "../utils/Constant";



const Head = () => {
  return (
    <div className="min-h-screen w-full">

      {/* Header */}
      <header className="flex w-full items-center gap-4 border-b bg-white px-4 py-3">

        
        <Link to="/" className="shrink-0">
          <img
            src={LOGO_URL}
            alt="BeautyCart"
            className="w-24 sm:w-28 md:w-32"
          />
        </Link>

       
        <div className="flex min-w-0 flex-1 justify-center">
          <div className="flex w-full max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              className="min-w-0 flex-1 rounded-l-md border px-3 py-2"
            />

            <button className="rounded-r-md bg-pink-500 px-4 py-2 text-white">
              Search
            </button>
          </div>
        </div>
        <nav className="shrink-0">
          <ul className="flex gap-4 sm:gap-6 md:gap-8">
            <li>
              <Link to="/" className="hover:text-pink-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-pink-600">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-pink-600">
                About
              </Link>
            </li>
          </ul>
        </nav>

      </header>

      <main className="w-full">
        <Outlet />
      </main>

    </div>
  );
};

export default Head;