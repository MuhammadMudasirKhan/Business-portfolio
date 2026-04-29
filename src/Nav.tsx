// import { Link } from "react-scroll";

// export default function Nav() {
//   return (
//     // 'sticky top-4' makes it stick to the top when scrolling
//     // 'z-50' ensures it stays above other content
//     // 'justify-between' forces Logo to left and Links to right
//     <nav className="sticky top-4 z-50 mx-auto h-17 w-[90vw] bg-white/50 backdrop-blur-md border border-gray-50 shadow-sm flex items-center justify-between px-8 rounded-[78px]"> 
      
//       {/* Logo Section */}
//       <div> 
//         <img src="./assets/react.svg" alt="Logo" className="h-8 w-auto" /> 
//       </div>

//       {/* Links Section */}
//       <ul className="hidden md:flex gap-20 font-extrabold text-gray-700 uppercase text-sm">
//         <Link to="/" className="hover:text-black transition">Home</Link>
//         <Link to="/about" className="hover:text-black transition">About</Link>
//         <Link to="/Services" className="hover:text-black transition">Services</Link>
//         <Link to="/Contact" className="hover:text-black transition">Contact</Link>

//       </ul>
      
//     </nav>
//   );
// }

//--------------------------------------------------------------------------------------------------
import { Link } from "react-scroll"; // ONLY import Link from react-scroll

export default function Nav() {
  return (
    <nav className="sticky center top-5 z-50 mx-auto h-21 w-[90vw] bg-aventus-navy/70 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between px-8 rounded-[78px]">
            <div className="h-20 w-20 border rounded-full overflow-hidden bg-white"> 
              <img src="./assets/AventusLogo.png" alt="Logo" className="h-20 w-20 " /> 
            </div>
      
      <ul className="hidden md:flex gap-12 font-extrabold uppercase text-sm text-aventus-silver cursor-pointer">
        {/* These 'to' props MUST match the 'name' in App.jsx */}
        <Link to="home" smooth={true} spy={true} hashSpy={true} duration={500} offset={-100} className="hover:text-aventus-accent transition">Home</Link>
        <Link to="about" smooth={true} spy={true} hashSpy={true} duration={500} offset={-100} className="hover:text-aventus-accent transition">About</Link>
        <Link to="services" smooth={true} spy={true} hashSpy={true} duration={500} offset={-100} className="hover:text-aventus-accent transition">Services</Link>
        <Link to="contact" smooth={true} spy={true} hashSpy={true} duration={500} offset={-100} className="hover:text-aventus-accent transition">Contact</Link>
      </ul>
      
      
    </nav>
  );
}

