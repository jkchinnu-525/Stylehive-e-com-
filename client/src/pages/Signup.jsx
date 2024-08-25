import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const [Data, setData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...Data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await axios.post(
        "https://stylehive.onrender.com/api/signup",
        {
          email: Data["email"],
          password: Data["password"],
        }
      );
      if (response.success) {
        setLoading(false);
      }
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="flex justify-center h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <div className="flex justify-center">
        <div>
          <div className="h-max rounded-lg">
            <div className="text-3xl font-extrabold">Create Your account</div>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="block text-lg">
                <span className="font-medium text-gray-400 mb-2 pt-2">
                  Email
                </span>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  className="border p-3 block w-full mt-3 bg-transparent rounded-lg"
                ></input>
                <span className="block text-gray-400 mb-2 font-medium pt-2">
                  Password
                </span>
                <input
                  id="password"
                  type="text"
                  onChange={handleChange}
                  placeholder="Password"
                  className="border p-3 block w-full mt-3 rounded-lg bg-transparent"
                ></input>
                <div className="text-md text-slate-700 p-2">
                  Already have an account?
                  <Link to="/signin">
                    <span className="pl-3 cursor-pointer hover:opacity-65  underline">
                      Sign In
                    </span>
                  </Link>
                </div>
                <button className="border hover:bg-slate-600 rounded-lg bg-slate-700 w-full p-2 mt-6 text-white">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
