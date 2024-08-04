import React from "react";
import './Services.css'


export const Services = () => {
  return (
    <>
  
    <div class="container-fluid">
      <h1 class="text-center mt-4 display-3 fw-bold">
        Our <span class="theme-text">Services</span>
      </h1>
      <hr class="mx-auto mb-3 w-25" />
      <div class="row mb-5">
        <div class="col-12 col-sm-6 col-md-3 m-auto">
          <div class="card shadow">
            <img src="./src/assets/pics/service.png" alt="" class="card-img-top"/>
            <div class="card-body">
              <h3 class="text-center">Web Development</h3>
              <hr class="mx-auto w-75" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                eligendi soluta est veniam sequi nemo, quas delectus eveniet
                ducimus rem animi. Natus non earum deleniti aliquam
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 m-auto">
          <div class="card shadow">
            <img src="./src/assets/pics/services1.png" alt="" class="card-img-top"/>
            <div class="card-body">
              <h3 class="text-center">App Development</h3>
              <hr class="mx-auto w-75" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                eligendi soluta est veniam sequi nemo, quas delectus eveniet
                ducimus rem animi. Natus non earum deleniti aliquam
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 m-auto">
          <div class="card shadow">
            <img src="./src/assets/pics/services2.png" alt="" class="card-img-top"/>
            <div class="card-body">
              <h3 class="text-center">Digital Marketing</h3>
              <hr class="mx-auto w-75" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                eligendi soluta est veniam sequi nemo, quas delectus eveniet
                ducimus rem animi. Natus non earum deleniti aliquam
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 m-auto">
          <div class="card shadow">
            <img src="./src/assets/pics/services3.png" alt="" class="card-img-top"/>
            <div class="card-body">
              <h3 class="text-center">Email Marketing</h3>
              <hr class="mx-auto w-75" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                eligendi soluta est veniam sequi nemo, quas delectus eveniet
                ducimus rem animi. Natus non earum deleniti aliquam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};
