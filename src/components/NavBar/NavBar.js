import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3
        style={{
          color: "black",
          fontFamily: "Arial",
          marginLeft: "10px",
        }}
      >
        QUEEN
      </h3>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Inicio
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Ropa para Mujeres
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Ropa para Hombres
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Ofertas
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Contacto
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Carrito
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
