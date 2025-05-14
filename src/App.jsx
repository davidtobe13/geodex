// // import './App.css'
// import Home from './components/Home/Home'

// function App() {

//   return (
//     <>
//       <Home/>
//     </>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import AboutUs from './components/About/About';
import ContactUs from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add more routes as needed */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Fallback route - redirect to home if path doesn't match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

// Placeholder components for the routes
// Replace these with your actual components once created
function Dashboard() {
  return <div className="p-8"><h1 className="text-2xl font-bold">Dashboard</h1></div>;
}


export default App;