import React from "react";
import bluesky from "../components/bluesky.png";
import blackn2 from "../components/blackn2.png";
import hgblack from "../components/hgblack.png";

const Dashboard = () => {
  return (
    <>
      <div className="text3">D A S H B O A R D</div>
        <div className="text4">
        The dashboard section is a central hub for managing 
        and monitoring the system. It displays best-selling 
        products and provides access to the order section 
        and catalog for adding, deleting, and editing products. 
        Access to this area is limited.
      </div>
      <div className="container-fluid px-3">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-order p-3 bg-yeiz shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <p className="fs-8">Orders Completed</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#555F61"
                  class="bi bi-folder-check"
                  viewBox="0 0 16 16"
                >
                  <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                  <path d="M15.854 10.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0l-1.5-1.5a.5.5 0 0 1 .707-.708l1.146 1.147 2.646-2.647a.5.5 0 0 1 .708 0" />
                </svg>
              </div>
              <h1 className="fs-2">1.230</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-order p-3 bg-yeiz shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <p className="fs-8">Recent Orders</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#555F61"
                  class="bi bi-folder-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                  <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                </svg>
              </div>
              <h1 className="fs-2">98</h1>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-order p-3 bg-yeiz shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <p className="fs-8">Total Customer</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#555F61"
                  class="bi bi-person-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </div>
              <h1 className="fs-2">793</h1>
            </div>
          </div>
          <div
            className="line-separator mx-auto mt-4.5"
            style={{ marginTop: "40px", width: "93%" }}
          ></div>
        </div>
      </div>
      <div
        className="best-selling-products-background p-5 rounded-3"
        style={{ width: "92.5%", height: "400px" }}>
        <p className="bs text-center">BEST SELLING PRODUCTS</p>
          <div className="card-wrapper d-flex">
          <div className="bscard d-flex">
            <div className="image-container">
              <img src={blackn2} alt="bs" />
            </div>
            <div className="text-container">
              <p1 className="p1 d-flex justify-content-end">
                YEiZ Black N2 T-Shirt
              </p1>
              <p className="p3">T-Shirt</p>
              <p className="p2">ID : 50605</p>
              <p>Size : L, XL</p>
              <p>Price : Rp. 139.000,00</p>
            </div>
          </div>
          <div className="bscard d-flex">
            <div className="image-container">
              <img src={bluesky} alt="bs" />
            </div>
            <div className="text-container">
              <p1 className="p1 d-flex justify-content-end">
                YEiZ Blue Sky T-Shirt
              </p1>
              <p className="p3">T-Shirt</p>
              <p className="p2">ID : 70907</p>
              <p>Size : M, L</p>
              <p>Price : Rp. 179.000,00</p>
            </div>
          </div>
          <div className="bscard d-flex">
            <div className="image-container">
              <img src={hgblack} alt="bs" />
            </div>
            <div className="text-container">
              <p1 className="p1 d-flex justify-content-end">
                YEiZ HG Black Crop Top
              </p1>
              <p className="p3">T-Shirt</p>
              <p className="p2">ID : 30903</p>
              <p>Size : S, M, L</p>
              <p>Price : Rp. 99.000,00</p>
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;
