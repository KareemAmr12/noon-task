"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as homeIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <>
      <nav className="navigation-mobile">
        <Link href="/favorites">
          {" "}
          <FontAwesomeIcon icon={solidHeart} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={homeIcon} />
        </Link>
      </nav>
      <nav className="navigation-desktop">
        <Link href="/favorites">Favorites</Link>
        <Link href="/">Home</Link>
      </nav>
    </>
  );
}
