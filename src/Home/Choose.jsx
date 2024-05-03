/** @format */
import icon1 from '../../src/assets/icons/check.svg'
import icon2 from '../../src/assets/icons/deliveryt.svg'
import icon3 from '../../src/assets/icons/Group 38729.svg'
import icon4 from '../../src/assets/icons/person.svg'
import icon5 from '../../src/assets/icons/Wrench.svg'
import icon6 from '../../src/assets/icons/group.svg'
const Choose = () => {
  return (
    <div className='my-10'>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className='flex gap-3 justify-between mt-10'>
        <div>
            <img src={icon1} alt="" />
            <h3>Expert Team</h3>
        </div>
        <div>
            <img src={icon2} alt="" />
            <h3>Timely Delivery</h3>
        </div>
        <div>
            <img src={icon3} alt="" />
            <h3>24/7 Support</h3>
        </div>
        <div>
            <img src={icon4} alt="" />
            <h3>Best Equipment</h3>
        </div>
        <div>
            <img src={icon5} alt="" />
            <h3>100% Guranty</h3>
        </div>
        <div>
            <img src={icon6} alt="" />
            <h3>Timely Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Choose;
