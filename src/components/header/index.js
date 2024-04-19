import { Link } from "react-router-dom";
import HeaderS from "../../style/components";

function Header() {
  return (
    <>
      <HeaderS>
        {/* <div className="btn-area" >
          <Link to="/login">
            <button> Login </button>
          </Link>

          <Link to="/register">
            <button> Cadastro </button>
          </Link>
        </div> */}
        <img id="logo" src="https://i.ibb.co/CP92TXg/logo1-1.png" />
      </HeaderS>
    </>
  );
}

export default Header;
