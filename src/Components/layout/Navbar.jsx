import { Link } from "react-router-dom";
import myLogo from "../../assets/images/mylogo.png";


function Navbar() {
    return (
            <header className="border-b border-gray-200">
               <div className="max-w-7xl mx-auto px-6">
                 <nav className="flex justify-between items-center px-8 h-20">

                    <div>
                        {/* <Link to="/">BuzzBuy</Link> */}
                        <img src={myLogo} alt="logo" className="w-[110px] h-auto"/>
                        
                    </div>
                    
                    <ul className="flex gap-8">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/products">Products</Link>
                        </li>

                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <div className="flex gap-8">
                        Search
                        Cart 
                        Login 
                        Register
                    </div>

                </nav>
               </div>
            </header>
    )
}

export default Navbar;