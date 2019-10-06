export const formatDate = response => {
  let updatedObject = response.data;
  let { purchaseDate } = updatedObject;
  if (purchaseDate !== undefined && purchaseDate !== null) {
    updatedObject.purchaseDate = moment(updatedObject.purchaseDate).format(
      "YYYY-MM-DD"
    );
  }
  return updatedObject;
};
