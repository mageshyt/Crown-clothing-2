import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { selectCollectionLoaded } from "./shop.selector";
import { ShopType } from "./shop.type";

// export const setCollectionData = (collectionData) => ({
//   type: ShopType.UPDATE_COLLECTIONS,
//   payload: collectionData,
// });

export const fetchCollectionStart = () => ({
  type: ShopType.FETCH_COLLECTIONS_START,
});

// ! success call
export const fetchCollectionSuccess = (collectionData) => ({
  type: ShopType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionData,
});
// ! error call
export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionSuccessAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(db, "collections");
    //   ! our fetching is calling
    dispatch(fetchCollectionStart());
    getDocs(collectionRef)
      .then((snapshot) => {
        const transFormedCollection = snapshot.docs.map((doc) => {
          const { title, items } = doc.data();

          return {
            routerName: encodeURI(title.toLowerCase()),
            title,
            items,
            id: doc.id,
          };
        });

        //! what we are doing here means means we are creating a new object and make title alone to small case & keep remaining unChange and return it like accumulator
        const reduced = transFormedCollection.reduce(
          (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
          },
          {}
        );
        dispatch(fetchCollectionSuccess(reduced));
        console.log("Success");
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
