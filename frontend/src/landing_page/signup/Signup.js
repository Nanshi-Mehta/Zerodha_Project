import { useState } from "react";
import "./Signup.css"; // CSS 

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  SIGNUP
  const handleSignup = async () => {
    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.message === "User already exists") {
      alert("User already registered, please login");
      setIsLogin(true);
      return;
    }

    if (data.message === "Signup successful") {
      const loginRes = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const loginData = await loginRes.json();

      localStorage.setItem("token", loginData.token);
      window.location.href = "http://localhost:3001";
    }
  };

  //  LOGIN
  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    const res = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (data.message === "User not found") {
      alert("User not found");
      return;
    }

    if (data.message === "Wrong password") {
      alert("Wrong password");
      return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="auth-container">

  <div className="hero-text">
    <h1>Open a free demat and trading account online</h1>
    <p>
      Start investing brokerage free and join a community of 1.6+ crore investors and traders
    </p>
  </div>

  {/* ✅ NEW WRAPPER */}
  <div className="form-center">
    <div className="auth-box">
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {!isLogin && (
        <>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
        </>
      )}

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={isLogin ? handleLogin : handleSignup}>
        {isLogin ? "Login" : "Signup"}
      </button>

      <p
        className="toggle-text"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "New user? Signup" : "Already registered? Login"}
      </p>
    </div>
  </div>

  <div className="mt-5">
    <h1>Investment options with Zerodha demat account</h1>
  </div>

</div>
  );
}

export default Signup;