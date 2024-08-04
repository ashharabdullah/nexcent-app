import tesla from "../assets/pics/tesla.png"
import icon1 from "../assets/icons/Icon 01.png"
import icon2 from "../assets/icons/Icon 2.png"
import icon3 from "../assets/icons/Icon 3.png"
import icon4 from "../assets/icons/Icon 4.png"
import icon5 from "../assets/icons/Icon 5.png"
import icon6 from "../assets/icons/Icon 6.png"
import right from "../assets/icons/Right.png"

const Customer = () => {
  return (
    <section  className="container-fluid bg-main d-flex  py-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center">
          <img src={tesla} className="img-fluid " alt="" />
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-5 px-lg-3 text-lg-start text-center">
          <p className="grey fw-medium ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minima
            eos deserunt ipsam magnam, dolore eum quia obcaecati ipsum nam
            facilis qui similique esse explicabo. Perspiciatis labore similique
            dolorem, fuga temporibus repudiandae doloremque saepe possimus iure
            veritatis unde laudantium enim odio sed cupiditate nobis ut
            molestias at neque. Amet excepturi necessitatibus porro est nam at
            unde ex, tempora itaque, praesentium dolore vero repellat beatae
            saepe non voluptatibus. Nisi sequi adipisci quod est, mollitia vel
            blanditiis. Unde, quaerat, totam delectus, harum minima incidunt
            rerum dicta deleniti omnis cumque similique hic sint ad? Quos
            corrupti asperiores nobis, vel dolorem libero! Quae, illum.
          </p>
          <h4 className="green fw-semibold">Tim Smith</h4>
          <p className="l-grey">British Dragon Boat Racing Association</p>

          <div className="d-flex align-items-center justify-content-between py-3 flex-wrap">
            <img src={icon1} className="img-fluid" alt="" />
            <img src={icon2} className="img-fluid" alt="" />
            <img src={icon3} className="img-fluid" alt="" />
            <img src={icon4} className="img-fluid" alt="" />
            <img src={icon5} className="img-fluid" alt="" />
            <img src={icon6} className="img-fluid" alt="" />
            <h4 className="green fw-semibold pt-4 pt-md-0 mx-auto mx-md-0">
              Meet all customers
              <span>
                <img src={right} className="img-fluid ms-2" alt="" />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer
