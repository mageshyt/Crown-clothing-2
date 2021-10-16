import React from "react";
import styled from "styled-components";
export const Banner = () => {
  return (
    <BannerContainer>
      {/* Image */}
      <div className="banner w-full ">
        <div className="info hidden 2xl:block xl:block lg:block md:block absolute top-1/4 left-24 ">
          <h2 className="text-2xl text-black">Winter Fasion</h2>
          <h2 className=" 2xl:text-5xl  xl:text-5xl lg:text-4xl md:text-4xl  w-96  font-black">
            Fashion Collection 2021
          </h2>

          {/* Button */}
          <h3 className="btn btn-md btn-primary ml-12 hover:bg-white hover:text-black delay-150 outline-none ">
            SHOP NOW
          </h3>
        </div>
      </div>
    </BannerContainer>
  );
};
const BannerContainer = styled.div`
  .banner {
    background: url("https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      no-repeat center center;
    height: 75vh;
    background-size: cover;
    position: relative;
    .info {
      @media (max-width: 768px) {
        top: 20px;
        right: 25px;
      }
    }
  }
`;
