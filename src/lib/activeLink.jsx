import { Link } from "react-router-dom";

export default function ActiveLink({ children, href, isActive, classname }) {
  return (
    <Link
      to={href}
      className={`${classname} ${
        isActive ? "border-black" : "border-transparent"
      }`}
    >
      {children}
    </Link>
  );
}
