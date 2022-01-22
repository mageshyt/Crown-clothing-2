import styled from "styled-components";
import React from "react";
import CollectionItems from "./Collection-Items";

const CollectionPreview = ({ title, items }) => {
  return (
    <Container className="flex justify-around flex-col">
      <h1 className="text-4xl ml-2 mt-2 font-bold uppercase">{title}</h1>
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
  }
`;
