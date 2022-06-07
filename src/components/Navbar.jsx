import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { async } from "@firebase/util";

const Navbar = () => {
  const { user, singOutUser } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await singOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <NavLink to='/'>Inicio</NavLink>
          <button onClick={handleClickLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to='/login'>Login | </NavLink>
          <NavLink to='/register'>Register | </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
