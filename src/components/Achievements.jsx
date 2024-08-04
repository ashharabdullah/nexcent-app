import people from "../assets/icons/logo-d10.png"
import finger from "../assets/icons/logo11.png"
import wallet from "../assets/icons/logo12.png"
import hands from "../assets/icons/logo13.png"

const Achievements = () => {
  return (
    <>
      <section className="container-fluid bg-main d-flex align-items-center py-5 flex-md-row flex-column ">
        <div className="d-flex justify-content-center col-12 col-md-4 col-lg-6  ">
          <div className="text-md-start text-center">
            <h2 className="fw-semibold d-grey">
              Helping a local{" "}
              <span className="d-block green">business reinvent itself</span>
            </h2>
            <p className="dark">
              We reached here with our hard work and dedication
            </p>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 d-flex flex-column row-gap-4 pt-3 pt-md-0">
          <div className="d-flex justify-content-evenly ">
            <div className="d-flex align-items-center col-6  ">
              <img src={people} alt="" className="img-fluid me-3" />
              <div className="d-flex flex-column">
                <h3 className="fw-bold d-grey mb-0">2,6445,3521</h3>
                <p className="grey mb-0 ">Members</p>
              </div>
            </div>
            <div className="d-flex align-items-center col-6  ">
              <img src={hands} alt="" className="img-fluid me-3" />
              <div className="d-flex flex-column">
                <h3 className="fw-bold d-grey mb-0">46,866</h3>
                <p className="grey mb-0">Club</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly ">
            <div className="d-flex align-items-center col-6 ">
              <img src={finger} alt="" className="img-fluid me-3" />
              <div className="d-flex flex-column">
                <h3 className="fw-bold d-grey mb-0">857,967</h3>
                <p className="grey mb-0">Event Bookings</p>
              </div>
            </div>
            <div className="d-flex align-items-center col-6 ">
              <img src={wallet} alt="" className="img-fluid me-3" />
              <div className="d-flex flex-column">
                <h3 className="fw-bold d-grey mb-0">2,4226,436</h3>
                <p className="grey mb-0">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievements
