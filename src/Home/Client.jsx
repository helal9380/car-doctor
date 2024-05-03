/** @format */
import client from '../../src/assets/images/about_us/Ellipse 2.png'


const Client = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">What Customer Says</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
      <div>
        <div className='flex gap-2'>
            <div>
                <img src={client} alt="" />
            </div>
            <div>
            <h3>Kamrul one</h3>
            <h3>Buisse man</h3>
            </div>
        </div>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <img src="" alt="" />
        <div></div>
      </div>
      </div>
    </div>
  );
};

export default Client;
