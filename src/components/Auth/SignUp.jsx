// import { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [password, setPassword] = useState('');

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-[100vh] items-center justify-center overflow-y-hidden">
//       {/* Left side - Form */}
//       <div className="w-full md:w-[50%] p-8 md:p-16 flex flex-col h-full items-center justify-center overflow-y-hidden">
//         <div className="mb-2 md:w-[90%] w-full">
//           <div className="flex items-center mb-2">
// <img src="/src/assets/logo.png" alt="" className='w-[120px] '/>
//             {/* <span className="ml-2 text-2xl font-bold">GEODEX</span> */}
//           </div>
          
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Start Your 14-Day Free Trial Today.</h1>
//           <p className="text-gray-500 text-sm mb-3">NO CREDIT CARD REQUIRED!</p>
          
//           <form className="space-y-3">
//             <div>
//               <label htmlFor="email" className="block text-xs uppercase text-gray-600 mb-1">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="johndoe@email.com" 
//                 className="w-full p-[10px] bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="company" className="block text-xs uppercase text-gray-600 mb-1">Company Name</label>
//               <input 
//                 type="text" 
//                 id="company" 
//                 value={company}
//                 onChange={(e) => setCompany(e.target.value)}
//                 placeholder="Advert Pro" 
//                 className="w-full p-[10px]  bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="password" className="block text-xs uppercase text-gray-600 mb-1">Password</label>
//               <div className="relative mb-4">
//                 <input 
//                   type={showPassword ? "text" : "password"} 
//                   id="password" 
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••••••••" 
//                   className="w-full p-[10px]  bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button 
//                   type="button" 
//                   onClick={togglePasswordVisibility} 
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full bg-blue-950 hover:bg-blue-900 text-white text-sm py-3 px-4 rounded flex items-center justify-center uppercase font-medium tracking-wide"
//             >
//               Start My Free Trial
             
//             </button>
//           </form>
          
//           <p className="text-xs text-gray-500 mt-4 text-center">
//             By Signing up to geodex, means you agree to our Privacy Policy and Terms of Service
//           </p>
          
//           {/* <div className="mt-3 text-center">
//             <p className="text-gray-600 text-sm">
//               Already a Member? <a href="#" className="font-bold text-blue-900 text-sm">LOG IN</a>
//             </p>
//           </div> */}
          
//           <div className="mt-3">
//             <div className="flex items-center justify-center">
//               <div className="border-t border-gray-300 flex-grow"></div>
//               <div className="mx-4 text-gray-500 text-sm">Or use Google</div>
//               <div className="border-t border-gray-300 flex-grow"></div>
//             </div>
            
//             <button className="mt-3 w-full bg-blue-50 hover:bg-blue-100 text-gray-800 py-2 px-4 rounded flex text-sm items-center justify-center">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//                 <path fill="none" d="M1 1h22v22H1z" />
//               </svg>
//               Sign up with Google
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <div className="hidden md:flex items-center justify-center h-[100%] md:w-1/2 overflow-y-hidden">
//         <div className="h-[100%] w-[80%] bg-red-400 bg-center flex items-center justify-center overflow-y-hidden" >
        
//           <img src="/src/assets/authimg.png" alt=""  />
//         </div>
//       </div>
//     </div>
//   );
// }



// pages/Signup.js
import React from 'react';
import GeoLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] px-4 text-center">
      {/* Logo */}
      <img src={GeoLogo} alt="Geodex Logo" className="h-24 mb-8" />
      
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Coming <span className="text-orange-500">Soon!</span>
      </h1>
      
      {/* Message */}
      <div className="max-w-xl">
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Geodex Ad Manager is in active development.
        </p>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg shadow-sm mb-8">
          <p className="text-lg md:text-xl text-gray-700">
            Join our <span className="font-semibold text-orange-600">priority waitlist</span> to be among the first to get access when we launch!
          </p>
        </div>
        
        {/* Waitlist form */}
        <form className="w-full max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
              required
            />
            <button 
              type="submit" 
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-200 font-medium"
            >
              Join Waitlist
            </button>
          </div>
        </form>
        
        {/* Return link */}
        <Link to="/home" className="text-orange-500 hover:text-orange-600 font-medium">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Signup;