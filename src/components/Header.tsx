import React from "react";

export default function Header() {
  return (
    <header className="py-10">
      <nav className="container flex mx-auto justify-between ">
        <div className="">
          <a href="#"> Company Logo </a>
        </div>
        <div className="w-2/5">
          <ul className="flex justify-evenly text-hover font-semibold text-xs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="font-bold text-xs">
          <a
            href="#"
            className="group bg-color-accent px-6 py-3 rounded-3xl text-color-light-text tracking-wide hover:bg-color-hovered duration-300"
          >
            Contact{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 inline transition-transform transform duration-300 group-hover:translate-x-1.5"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>
      <nav className="mobile-nav hidden">
        <div className="m_logo c_logo col-6">
          <a href="#"> Company Logo </a>
        </div>
        <div className="open_btn text-end col-6">
          <i className="bi bi-list"></i>
        </div>
        <div className="m_menu isOff">
          <ul className="d-flex justify-content-evenly flex-column txt_light">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <div className="close_btn text-center">
            <i className="bi bi-x-lg txt_light"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
