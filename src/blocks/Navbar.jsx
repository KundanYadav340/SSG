import { BiSolidHome } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
const NavbarLinks = [
  {
    name: "Home",
    url: "/",
    icon: (
      <BiSolidHome
        style={{ width: "20px", height: "20px", color: "inherit" }}
      />
    ),
  },
  {
    name: "Users",
    url: "/users",
    icon: (
      <FaUserLarge
        style={{ width: "16px", height: "16px", color: "inherit" }}
      />
    ),
  },
];
const Navbar = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid #dedede",
        boxSizing: "border-box",
        backdropFilter: "blur(4px) opacity(0.6)",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "58px",
          padding: "16px 30px",
          width: "calc(100%)",
        }}
      >
        <div
          style={{
            color: "blue",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          SSG
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {NavbarLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="navbar-links"
              style={{
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {link.icon && <span>{link.icon}</span>} {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
