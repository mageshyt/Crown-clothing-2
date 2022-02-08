import styled from "styled-components";
import React from "react";
import CollectionItems from "./Collection-Items";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  return (
    <Container className="flex justify-around mt-5 flex-col">
      <h1 className="text-4xl title ml-2 font-semibold uppercase">{title}</h1>

      <div className="preview-items flex flex-row   justify-around mt-10 mb-2">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItems key={id} {...otherProps} />
          ))}
      </div>
    </Container>
  );
};

export default CollectionPreview;
const Container = styled.div`
  @media (max-width: 550px) {
    .preview-items {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .title {
      text-align: center;
    }
  }
`;
