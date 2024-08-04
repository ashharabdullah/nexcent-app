import icon1 from "../assets/icons/Icon 1.png"
import icon2 from "../assets/icons/Icon 2.png"
import icon3 from "../assets/icons/Icon 3.png"
import icon4 from "../assets/icons/Icon 4.png"
import icon5 from "../assets/icons/Icon 5.png"
import icon6 from "../assets/icons/Icon 6.png"

const Clients = () => {
    return (
        <section className="my-5 container-fluid d-flex flex-column align-items-center ">
            <h2 className="d-grey fw-semibold ">
                Our Clients
            </h2>
            <p className="grey text-center">We have been working with some Fortune 500+ clients</p>
            <div className="d-flex justify-content-evenly w-100 py-3 flex-wrap ">
                <img src={icon1} className="img-fluid" alt="" />
                <img src={icon2} className="img-fluid" alt="" />
                <img src={icon3} className="img-fluid" alt="" />
                <img src={icon4} className="img-fluid" alt="" />
                <img src={icon5} className="img-fluid" alt="" />
                <img src={icon6} className="img-fluid" alt="" />
                <img src={icon3} className="img-fluid" alt="" />
            </div>
        </section>
    )
}
export default Clients