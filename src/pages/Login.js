import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8888/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login Response:", data);  // Log the response
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
      <div className="h-72 w-2/3 border-2 border-gray ml-48 mt-14 mb-24 shadow-lg">
        <img className="h-20 w-52 ml-80 -mb-6 "
          src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712" alt="" />
        <br></br>
        <p className="text-2xl font-bold text-left ml-5">Admin Log In !!! </p>
        <p className="font-serif text-left ml-5 text-slate-500">Enter you Eman & password</p>
        <form onSubmit={handleLogin}>
          <input className="border-2 w-60 rounded-md border-slate-500 ml-36 "
            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br /><br />
          <input className="border-2 w-60 rounded-md border-slate-500 ml-36"
            type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br /><br />
          <button className="border-2 w-32 rounded-md border-slate-500 ml-52"
            type="submit">Login</button>
{/* email :emanwaheed@gmail
    password:emanw123 */}
        </form>
      </div>
    </div>
  );
};

export default Login;