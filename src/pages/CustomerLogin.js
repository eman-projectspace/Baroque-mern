import { useState } from "react";
import { useNavigate } from "react-router-dom";


  const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8888/api/customer/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); //  Store JWT Token
      alert("Login successful!");
      navigate("/customerdashboard"); //  Redirect to User dashboard
    } else {
      alert(data.message);
    }
  };

  return (
    <div >
      <div  className="bg-slate-200 md:h-96 md:w-2/3 -mt-2 md:border-2 md:border-gray md:ml-48 md:mt-14 md:mb-24 md:shadow-lg">
          <img className="ml-36 mt-2 h-20 w-48 md:h-20 md:w-52 md:ml-80 md:mt-3 " 
           src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712" alt=""/>

        <p className="text-2xl font-bold text-left ml-5">Log In</p>
        <p className="text-left ml-7 text-slate-500 font-sans">
          enter your email Login to your existing account</p>
      <form onSubmit={handleLogin}>
        <input  className="border-2 border-gray-400 w-96 mt-2 rounded-md p-1" 
        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br/>
        <input  className="border-2 border-gray-400 w-96 mt-2 rounded-md p-1" 
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br/><br/>
        <button className="border-2 border-gray-500 w-32 mb-10 hover:text-black rounded-md" type="submit"> Login </button>
      </form>
      <p className="hover:underline inline-block ml-96 font-medium cursor-pointer mb-32">Privacy</p>
    </div>

    </div>
  );
};

export default CustomerLogin