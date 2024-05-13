import { DataBase } from "../db/DataBase.js";
import User from "./User.js";

const db = new DataBase();

export class Customer {
  constructor(customerId, firstName, lastName, userName, password) {
    this._customerId = customerId;
    this._firstName = firstName;
    this._lastName = lastName;
  }
  get FullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  static addNewCustomer(customerObjt) {
    let result = false;
    const exists = Customer.customerExists(customerObjt.customerId);
    if (exists) {
      [];
      result = false;
    } else {
      db.lstCustomer.push(customerObjt);
      result = true;
    }

    return result;
  }

  static customerExists(id = 0) {
    return db.lstCustomer.some((e) => e.customerId === id);
  }
  static getAllCustomer() {
    return db.lstCustomer;
  }
}
