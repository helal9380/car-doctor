/** @format */

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
console.log(services);
  return (
    <div className="my-10">
      <div className="space-y-3 text-center">
        <h3 className="text-orange-400 font-bold">Servece</h3>
        <h3 className="text-3xl font-semibold"> Our service area</h3>
        <p className="md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;