import React from "react";
import Avatar from "../../assets/avatar.png";
import Stars from "../../assets/Stars.svg";

const ReviewData = [
  {
    id: "0",
    review:
      "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page.",
    name: "Mila McSabbu",
    profession: "Freelance Designer",
  },
  {
    id: "1",
    review:
      "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page.",
    name: "Jenny Wilson",
    profession: "UI/UX Designer",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h1 className="heading">Testimonials</h1>
      <p>Was unsere Kunden Sagen</p>
      <div className="mt-[30px]"></div>
      <div className="md:flex">
        {ReviewData.map((data) => {
          return (
            <div className="testimonial-card w-[50%] mr-[10px]">
              <p className="review">
                OMG! I cannot believe that I have got a brand new landing page
                after getting appmax. It was super easy to edit and publish.I
                have got a brand new landing page
              </p>
              <div className="flex space-between w-[100%] mt-[20px]">
                <div className="flex ">
                  <img src={Avatar} alt="avatar" />
                  <div className="ml-[10px] flex flex-col align-center mt-[10px]">
                    <h3 className="review-name">{data.name}</h3>
                    <p className="review-prof">{data.profession}</p>
                  </div>
                </div>
                <div className="md:w-[49%] mt-[15px]">
                  <div className="flex justify-end ">
                    <img src={Stars} alt="stars" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
