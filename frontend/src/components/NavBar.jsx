import { NavLink } from "react-router-dom"

const NavBar=()=> {
  return (
        <header className="header">
            <NavLink to="/" className="w-auto h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">DigiNature</p>
            </NavLink>
            <nav className="text-lg gap-5 flex font-medium">
                <NavLink to="/about" className={({isActive})=> isActive? 'text-blue-500': 'text-black'}>
                    Cam
                </NavLink>
                <NavLink to="/map" className={({isActive})=> isActive? 'text-blue-500': 'text-black'}>
                    Map
                </NavLink>
                <NavLink to="/booklet" className={({isActive})=> isActive? 'text-blue-500': 'text-black'}>
                    Booklet
                </NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive? 'text-blue-500': 'text-black'}>
                    Contact
                </NavLink>
            </nav>
        </header>
  )
}

export default NavBar

