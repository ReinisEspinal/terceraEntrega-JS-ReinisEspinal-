import { DataBase } from "../db/DataBase.js";
import { Customer } from "./Customer.js";
import CustomerLog from "../class/CustomerLog.js";

const db = new DataBase();

export default class User extends Customer {
  constructor(customerId, userName, password, isLogin = false) {
    super(customerId);
    this.userName = userName;
    this.customerId = customerId;
    this.password = password;
    this.isLogin = isLogin;
  }

  static registerUser(user) {
    const newUser = new User(
      user.customerId,
      user.userName,
      user.password,
      true
    );
    db.lstUser.push(newUser); // Agregar el nuevo usuario a la lista de usuarios
    return newUser;
  }

  static logIn(userName = "", password = "") {
    let result = false;

    const customer = db.lstUser.find((e) => {
      return e.userName === userName;
    });

    if (customer.password === password) {
      customer.isLogin = true;
      CustomerLog.addCustomerLog(userName, "LOGIN");
      result = true;
    }
    return result;
  }

  static logOut(loginObjt) {
    result = false;
    const customerLog = db.lstUser.find((e) => {
      return (
        e.userName === userName &&
        e.password === e.password &&
        e.isLogin === false
      );
    });
    if (customerLog.isLogin) {
      customerLog.isLogin = false;
      result = true;
    }
    return result;
  }

  static userNameExists(userName = "") {
    return db.lstUser.some((e) => e.userName === userName);
  }
}
