const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
        border: "2px solid ",
        borderRadius: "2%",
        padding: "2px",
      }}
    >
      <h2>Practice OOP</h2>
      <section
        style={{
          display: "flex",
          gap:"5px"
        }}
      >
        <h4 className="list-group-item">Item1</h4>
        <h4 className="list-group-item">Item2</h4>
        <h4 className="list-group-item">Ite3</h4>
        <h4 className="list-group-item">Item4</h4>
      
      </section>
      
    </div>
  );
};

export default Navbar;
