import { useState } from "react";

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

  return (
      <div  className="h-72 w-2/3 border-2 border-gray ml-48 mt-14 mb-24 shadow-lg">
        <p className="text-center text-4xl font-bold">BAROQUE</p>
        <br></br>
        <p className="itext-2xl font-bold">Customer Sign up In</p>
        <p>enter your email and we will send you will Sign up</p>
      <form onSubmit={handleSignup}>
      <input  className="border-2 border-black w-60" 
        type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br/>
          <input  className="border-2 border-black w-60" 
         type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br/>
          <input  className="border-2 border-black w-60" 
         type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br/>
          <button className="border-2 border-black w-60 hover:bg-white hover:text-black" type="submit">
            Sign up
          </button>
      </form>
    </div>
  );
};

export default CustomerSignup
