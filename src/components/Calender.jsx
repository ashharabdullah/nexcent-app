import phone from "../assets/pics/phone.png"

const Calender = () => {
  return (
    <section
      className="container-fluid d-flex align-items-center py-5 flex-md-row flex-column"
    >
      <div className="col-md-5 col-12 d-flex justify-content-center  ">
        <img src={phone} className="img-fluid" alt="" />
      </div>
      <div className="col-md-7 col-12 text-md-start text-center py-5 py-md-0">
        <h2 className="d-grey fw-semibold">
          How to design your site footer like{" "}
          <span className="d-lg-block">we did</span>
        </h2>
        <p className="grey w-md-75 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut qui,
          debitis dolore error fuga eligendi quae? At repellendus ipsam minima
          commodi neque asperiores qui incidunt quis, voluptates nemo. Officia
          error impedit praesentium labore nam minus hic asperiores cum esse,
          est illum iure quaerat eaque provident aut ea? Consequatur impedit
          esse quisquam dolor perspiciatis nisi soluta culpa laborum neque
          provident, labore perferendis asperiores expedita! Iure provident
          repellendus corrupti veritatis aliquid? Dolorum illum, doloribus
          nostrum natus atque quasi assumenda sint alias suscipit incidunt,
          cupiditate aut iusto fugit facere asperiores, neque esse tempore
          inventore recusandae odit corrupti dolor consectetur! Eum, temporibus
          eligendi!
        </p>
        <button className="btn-learn border-0 text-white mt-3">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Calender
