
async function getShoppingProductsCar() {

    let response;
    let lstProductsInCar=[];
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: "1Wnhmd8yF8490RNKvXcZmbXxgbLL7UOPI1nSw-BJPgL8",
        range: "shoppingCars!A:B",
      });
    } catch (err) {
      console.error("Error: ", err);
      return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      console.warn("No data found.");
      return;
    }
    range.values.forEach((fila) => {
      const newProductIncar = {
        name: fila[0],
        lastname: fila[1],
      };
      lstProductsInCar.push(newProductIncar);
    });
    console.log(lstProductsInCar);
  }
  