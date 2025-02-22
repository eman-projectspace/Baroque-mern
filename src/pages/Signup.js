import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8888/api/admin/register", {
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

  return (
    <div>
    <div className="border-2 border-slate-500 h-auto w-2/3  ml-44 mt-20 bg-slate-100 shadow-lg pb-10" >
      <p className="font-bold text-2xl text-slate-500 mb-5 mt-3 ">ADMIN SIGN-UP </p>
      <form onSubmit={handleSignup}>
        <input className="border-2 border-slate-400 h-12 w-3/6"
         type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>
        <input  className="border-2 border-slate-400  h-12 w-3/6"
        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
        <input  className="border-2 border-slate-400  h-12 w-3/6"
         type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
        <button className="rounded-lg border-2 border-slate-500 p-2 pl-4 pr-4" type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;