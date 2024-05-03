/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Services = () => {
  const { user } = useContext(AuthContext);
  const [services, setSevices] = useState([]);
  console.log(user.email);
  const url = `http://localhost:5000/booking?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSevices(data);
      });
  }, [url]);

  console.log(services);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount) {
          alert('sucsessfully deleted')
        }
        const remainig = services.filter(item => item._id !== id);
        setSevices(remainig)
      });
  };
  return (
    <div>
      <h3>This is Services {services.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Image</th>
                <th>Job</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {services.map((service) => (
                <tr key={service._id}>
                  <th>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={service.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.custoerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>{service.date}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Services;
