import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
      <h3
        style={{
          color: "black",
          fontFamily: "Arial",
          marginLeft: "10px",
        }}
      >
        QUEEN
      </h3>
      </Link>

      <div className='Categoria'>
      <NavLink to={'/category/Disco'} className={({isActive})=>isActive?'ActiveOption':'Option'}>Celulares</NavLink>
      <NavLink to={'/category/celular'} className={({isActive})=>isActive?'ActiveOption':'Option'}>Celulares</NavLink>
      <NavLink to={'/category/celular'} className={({isActive})=>isActive?'ActiveOption':'Option'}>Celulares</NavLink>
      
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
