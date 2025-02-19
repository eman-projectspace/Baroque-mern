import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const CustomerSignup = () => {
 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8888/api/customer/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup successful! Please log in.");
    } else {
      alert(data.message);
    }
  };
  const navigate = useNavigate();
  return (
      <div  className="h-96 w-2/3 border-2 border-gray ml-48 mt-10 mb-24 shadow-lg bg-slate-200">
       <img className="h-20 w-52 ml-80 mt-3 " 
           src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712" alt=""/>
        <p className="text-2xl font-bold text-left ml-10">Sign up</p>
        <p className="text-left ml-10 text-slate-700 font-serif mb-2">enter your email and we will send you will Sign up</p>
        <input  className="border-2 border-black w-96 rounded-md" 
        type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
       <br/><br/>
      <input  className="border-2 border-black w-96  rounded-md" 
      type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br/><br/>
      <input  className="border-2 border-black w-96 rounded-md" 
         type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br/><br/>
           <form onSubmit={handleSignup}>
          <button className="w-32 ml-12 bg-black text-white font-mono" type="submit">
            Submit</button>
          </form>
      <div className="mt-10">
        <p className="text-right">If you already made an account then Click here !!!</p>
         <button className="w-30 hover:text-blue-800 ml-96 "
           onClick={() => navigate("/Customerlogin")}>Login In</button>
                    <button className="w-30 ml-96 text-white "
           onClick={() => navigate("/login")}>Admin Login In</button>
      </div>
    </div>
  );
};

export default CustomerSignup
