import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8888/api/accounts/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Store JWT Token
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert(data.message);
    }
  };

  return (
    <div >
      <div  className="h-72 w-2/3 border-2 border-gray ml-48 mt-14 mb-24 shadow-lg">
        <p className="text-center text-4xl font-bold">BAROQUE</p>
        <br></br>
        <p className="itext-2xl font-bold">Log In</p>
        <p>enter your email and we will send you a login</p>
      <form onSubmit={handleLogin}>
        <input  className="border-2 border-black w-60" 
        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br/><br/>
        <input className="border-2 border-black w-60" 
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br/><br/>
        <button  className="border-2 border-black w-60" 
        type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;