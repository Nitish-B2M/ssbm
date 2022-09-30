// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

// export const Navbars = () => {
//     return(
//         <>
//         <div className="container-fluid">
//         <div className='navbar'>
//             <div className="container">
//             <div className="logo">
//                 <div className="company_name">NY-OFFICIAL</div>
//             </div>
//             <div className="navbar_menu">
//                 <ul>
//                     <li className='listting_menu'><a href="/">Menu</a></li>
//                     <li className='listting_menu'><a href="/">About</a></li>
//                     <li className='listting_menu'><a href="/">Contact us</a></li>
//                     <li className='listting_menu'><a href="/">More</a></li>
//                 </ul>
//             </div>
//             {/* <div className='login-css'> */}
//                 <div className="btn" >
//                     <a href='/'>Login</a>
//                 {/* </div> */}
//             </div>  
//         </div>
//         </div>
//         </div>
//         </>
//     );
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../myComponents/navbar.css';

export function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbar' variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:22,letterSpacing:2}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='link' href="#home">Home</Nav.Link>
            <Nav.Link className='link' href="#features">Features</Nav.Link>
            <Nav.Link className='link' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
