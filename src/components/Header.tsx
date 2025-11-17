"use client";

import ThemeToggle from "../components/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          My Animation App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/loader-animation" className="nav-link">
                Loader
              </Link>
            </li>
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
