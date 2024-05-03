/** @format */

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { title,price, img } = useLoaderData();
  const {user} = useContext(AuthContext)

  const handleCheckInfo = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const email = user?.email;
    // console.log(name,price,date,email)
    const order = {
        custoerName: name,
        price,
        img,
        date,
        email
    }
    console.log(order);

    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId) {
            toast.success('Successfully added data')
        }
    })

  }
  return (
    <div>
      <h3>Booking {title}</h3>
            <form onSubmit={handleCheckInfo} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="name"
             
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  placeholder="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  className="input input-bordered"
                  required
                />
                
              </div>
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
  );
};

export default CheckOut;
