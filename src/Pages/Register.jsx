/** @format */
import { useContext } from "react";
import loginImg from "../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from 'react-hot-toast';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result => {
      console.log(result);
      toast.success('Successfully added user in the firebase')
      
    })
    .catch(error => {
      console.log(error);
    })


  };
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
            Register Please!!
          </h2>
          <form
            onSubmit={handleRegister}
            className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
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
                  Already have an accout please{" "}
                  <Link
                    className="text-lg font-semibold text-orange-500"
                    to={"/login"}>
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
