"use client"

import type { FC } from "react";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import supabase from "../../../../supabase/supabase";
import { toast } from "react-toastify";
import Manifesto from "../../Manifesto";

const SignIn: FC = () => {
  const { User, setUser } = useContext(DataContext);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    if (error) toast.error(error.message);
    else {
      localStorage.setItem("user", JSON.stringify(data.user.id));
      setUser(data.user.id);
      setPassword(null);
      toast.info("Successfully logged in!");
    }
  };

  useEffect(() => {
    if (User) router.push("/");
  }, [User]);

  return (
    <div className="Login">
      <form className="left" data-aos="fade-right">
        <div className="info">
          <span style={{ fontWeight: "800" }}>Login</span> or Sign up to
          continue...
        </div>
        <div className="input-master">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input input-misc"
              type="email"
              value={Email}
              onChange={(e) => setEmail((prev) => e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input input-misc"
              type="password"
              value={Password}
              onChange={(e) => setPassword((prev) => e.target.value)}
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleSignin} className="signup" type="submit">
            Login
          </button>
          <div className="action">
            Don't have an account?
            <Link className="action-button" href="/signup">
              Signup
            </Link>
          </div>
        </div>
      </form>
      <div className="right relative overflow-hidden" data-aos="zoom-in" data-aos-duration="600">
        <div className='relative h-full'>
          <article className="container"/>
            {/* <div className="logo">AI24</div> */}
            {/* <div className="container-text">
              Unlimited movies, TV shows and more. <br />
              Watch anywhere.
            </div> */}
          <span className='absolute top-0 w-full flex items-center justify-center h-full'>
            <Manifesto />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
