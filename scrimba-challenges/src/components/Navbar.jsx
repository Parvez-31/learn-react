const Navbar = () => {
  const navList = {
    display: "flex",
    gap: "10px",
    listStyle: "none",
    // justifyContent: "center",
    // alignItem: "center",
  };

  const header = {
    display: "flex",
    justifyContent: "space-around",
  };

  const logoImg = {
    width: "50px",
  };

  return (
    <>
      <header style={header}>
        <img src="raspberry.png" alt="raspberry" style={logoImg} />

        <nav>
          <ul style={navList}>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
