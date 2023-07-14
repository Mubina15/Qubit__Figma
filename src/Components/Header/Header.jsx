import "./Header.css"
import Logo from "../../Assets/Assets/img/logo.svg"

function Header() {
    
     return (
        <header className="header">
        <div className="container">
         <div className="header__div">
             <a href="#">
                 <img src={Logo} alt="rasim" />
             </a>
 
             <ul className="header__list">
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Why Qubit?
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Products
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Solutions
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Customers
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Case studies
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         Resources
                     </a>
                 </li>
                 <li className="header__item">
                     <a href="#" className="header__link">
                         More
                     </a>
                 </li>
             </ul>
 
             <a className="header__item--link" href="#">
                 Book a demo
             </a>
 
             <a className="header__item--login" href="#">
                 Log in
             </a>
 
         </div>
        </div>
     </header>
     )

}


export default Header;