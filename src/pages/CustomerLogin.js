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
      <div  className="h-96 w-2/3 border-2 border-gray ml-48 mt-14 mb-24 shadow-lg">
          <img className="h-20 w-52 ml-80 mt-3 " 
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
        <button className="border-2  border-gray-200 w-32 hover:text-black rounded-md" type="submit"> Login </button>
      </form>
      <p className="hover:underline inline-block ml-96 font-medium cursor-pointer">Privacy</p>
    </div>

    </div>
  );
};

export default CustomerLogin