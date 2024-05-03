/** @format */
import { Link } from "react-router-dom";
import loginImg from "../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {
  const {singIn} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error)
    })

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img
            src={loginImg}
            alt=""
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center font-semibold text-3xl my-4">
            Login Please!!
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
               
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p
             
                  className="label-text-alt link link-hover">
                  You have no account please <Link className="text-lg font-semibold text-orange-500" to={'/register'}>Register</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
