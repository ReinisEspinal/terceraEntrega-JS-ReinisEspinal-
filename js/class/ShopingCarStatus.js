export default class shoppingCarStatus {
  constructor() {}

  get Active() {
    return "ACTIVE";
  }

  get Empty() {
    return "EMPTY";
  }
  get Abandoned() {
    return "ABANDONED";
  }
  get Processing() {
    return "PROCESSING";
  }
  get Completed() {
    return "COMPLETED";
  }
}
