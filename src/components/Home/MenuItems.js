import React from "react";
import Directory_Data from "../../assets/directory.data";
import styled from "styled-components";
import { withRouter } from "react-router";

const MenuItems = ({ history }) => {
  return (
    <Container className="container mt-10  ">
      {Directory_Data.map(({ title, size, imageUrl, id, linkUrl }) => {
        return (
          <div
            onClick={() => history.push("/shop")}
            key={id}
            className={`${size}  menu-item `}
          >
            <div
              className="background-image "
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            {/* text */}
            <div className="content ">
              <h2 className=" uppercase text-xl">{title}</h2>
              <h2>SHOP NOW</h2>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default withRouter(MenuItems);
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .menu-item {
    min-width: 30%;
    height: 240px;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &.large {
      height: 400px;
    }
    &:first-child {
      margin-right: 7.5px;
    }
    &:last-child {
      margin-left: 7.5px;
    }
    .content {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      transition: all 0.3s;
      background-color: white;
      opacity: 0.7;
      font-weight: 800;
      position: absolute;
      align-items: center;
      justify-content: center;

      .title {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
      }

      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }
    .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: all 6s cubic-bezier(0.165, 0.84, 0.44, 0.95);
    }

    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(1.1);
      }
      &.content {
        background: #fff;
        opacity: 0.9;
      }
    }
  }
  @media (max-width: 550px) {
    display: block;
    .menu-item {
      max-width: 700px;
    }
  }
`;
