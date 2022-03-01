import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItems from "../Shop/Collection-Items";
import styled from "styled-components";
const collectionPage = ({ collection }) => {
  console.log({ collection });
  const { title, items } = collection;
  return (
    <Container className="flex flex-col  ">
      <h1 className="text-4xl title m-[30px]  font-semibold uppercase">
        {title}
      </h1>
      <div className=" preview-items gap-y-10 items space-x-8 grid  place-items-center lg:grid-cols-4 grid-cols-2 ml-4  ">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};
const mapStateToProps = (state, ownProps) => ({
  // ! ownProps will pass all the props in the collection page including the match
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(collectionPage);
const Container = styled.div`
  @media (max-width: 700px) {
    items {
      grid-template-columns: repeat(500px, 1fr);
    }
  }
  @media (max-width: 550px) {
    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .title {
      text-align: center;
    }
  }
`;
