function counterElementList(lstObjt = [Object]) {
  let counter = 0;

  lstObjt.forEach((element) => {
    counter += 1;
  });

  return counter;
}

export default counterElementList;