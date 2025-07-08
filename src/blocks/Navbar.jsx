const Navbar = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "48px",
          margin: "16px",
          width: "calc(100% - 32px)",
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
            gap: "16px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            Home
          </span>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            About
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
