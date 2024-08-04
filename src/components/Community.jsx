import buildings from "../assets/icons/buildings.png"
import people from "../assets/icons/people.png"
import threehand from "../assets/icons/threehand.png"

const Community = () => {
  return (
    <section className="container-fluid  d-flex flex-column align-items-center">
      <h2 className="d-grey fw-semibold text-center">
        Manage your entire community
        <span className="d-md-block text-center"> in a single system</span>
      </h2>
      <p className="grey">Who is Nextcent suitable for?</p>
      <div className=" d-flex justify-content-evenly py-4 col-12 flex-wrap ">
        <div style={{width: "300px"}}>
          <img
            src={people}
            className=" img-fluid mx-auto d-block py-2"
            alt=""
          />
          <div>
            <h3 className="d-grey text-center fw-bold">
              Membership Organisations
            </h3>
            <p className="grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div style={{width: "300px"}}>
          <img
            src={buildings}
            className=" img-fluid mx-auto d-block py-2"
            alt=""/>
          <div>
            <h3 className="d-grey text-center fw-bold">
              National <span className="d-md-block">Associations</span>
            </h3>
            <p className="grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div style={{width: "300px"}}>
          <img
            src={threehand}
            className=" img-fluid  mx-auto d-block py-2"
            alt=""/>
          <div>
            <h3 className="d-grey text-center fw-bold">
              Clubs And <span className="d-md-block">Groups</span>
            </h3>
            <p className="grey text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community