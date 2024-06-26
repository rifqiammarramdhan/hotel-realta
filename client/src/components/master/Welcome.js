import React from "react";

const Welcome = () => {
  const dashboardImages = [
    {
      desc: "Live the good life at this luxurious hotel",
      link: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      desc: "The sunset view will never disappoint your experience",
      link: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      desc: "Escape to the ultimate paradise",
      link: "https://images.unsplash.com/photo-1614568112072-770f89361490?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {dashboardImages.map((picture) => {
            return (
              <div>
                <div class="carousel-item active" data-bs-interval="6000">
                  {/* <blockquote class="blockquote text-end">
                    <p className="fs-5 text-muted">{picture.desc}</p>
                  </blockquote> */}
                  <img
                    src={picture.link}
                    class="d-block w-100 img-fluid rounded shadow"
                    style={{ height: "75vh" }}
                    alt="..."
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
