// // components/Header.js
// import React, { useState } from 'react';
// import GeoLogo from '../../assets/logo.png'; // You'll need to add this image to your assets
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="shadow-sm py-4">
//       <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={GeoLogo} alt="Geodex Logo" className="h-12" />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/home" className="text-orange-500 font-medium">Home</Link>
//            <Link to="/learn"  className="text-gray-600 hover:text-orange-500">Learn</Link>
//            <Link to="/about"  className="text-gray-600 hover:text-orange-500">About</Link>
//            <Link to="/contact"  className="text-gray-600 hover:text-orange-500">Contact</Link>
          
//           <div className="flex items-center space-x-4">
//             <Link to="/signin"className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</Link>
//             <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</Link>
//           </div>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//           >
//             {isOpen ? (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pt-2 pb-4">
//            <Link to="/home"  className="block py-2 text-orange-500 font-medium">Home</Link>
//            <Link to="/learn"  className="block py-2 text-gray-600 hover:text-orange-500">Learn</Link>
//            <Link to="/about"  className="block py-2 text-gray-600 hover:text-orange-500">About</Link>
//            <Link to="/contact"  className="block py-2 text-gray-600 hover:text-orange-500">Contact</Link>
//           <div className="mt-4 space-y-2">
//              <Link to="/signin"  className="block text-center border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</Link>
//             <Link to="/signup" className="block text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;




// components/Header.js
import React, { useState } from 'react';
import GeoLogo from '../../assets/logo.png'; // You'll need to add this image to your assets
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation link styling with active state for desktop
  const desktopLinkStyle = (path) => {
    return isActive(path) 
      ? "text-orange-500 font-medium" 
      : "text-gray-600 hover:text-orange-500";
  };

  // Navigation link styling with active state for mobile
  const mobileLinkStyle = (path) => {
    return isActive(path) 
      ? "block py-2 text-orange-500 font-medium" 
      : "block py-2 text-gray-600 hover:text-orange-500";
  };

  return (
    <nav className="shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={GeoLogo} alt="Geodex Logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={desktopLinkStyle("/")}>Home</Link>
          {/* <Link to="/learn" className={desktopLinkStyle("/learn")}>Learn</Link> */}
          <Link to="/about" className={desktopLinkStyle("/about")}>About</Link>
          <Link to="/contact" className={desktopLinkStyle("/contact")}>Contact</Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/signin" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</Link>
            <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4">
          <Link to="/" className={mobileLinkStyle("/")}>Home</Link>
          {/* <Link to="/learn" className={mobileLinkStyle("/learn")}>Learn</Link> */}
          <Link to="/about" className={mobileLinkStyle("/about")}>About</Link>
          <Link to="/contact" className={mobileLinkStyle("/contact")}>Contact</Link>
          <div className="mt-4 space-y-2">
            <Link to="/signin" className="block text-center border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">Signin</Link>
            <Link to="/signup" className="block text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Signup</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;