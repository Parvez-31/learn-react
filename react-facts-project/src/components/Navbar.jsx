const Navbar = () => {
  return (
    <>
      <header
        style={{
          height: "15vh",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "30px",
            gap: "20px",
          }}
        >
          <img
            src="raspberry.png"
            alt="raspberry photo"
            style={{
              width: "50px",
            }}
          />
          <h1
            style={{
              color: "black",
            }}
          >
            ReactFacts
          </h1>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
