import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/MessMotion.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="MessManager Logo" className="h-10 mr-3" />
          <span className="text-white text-2xl font-bold">MessMotion</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Left-aligned Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/billing"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Billing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right-aligned Login and Signup Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
            }
          >
            Signup
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden space-y-4 text-white absolute top-16 left-0 right-0 bg-gray-800 p-4 z-20`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Billing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
