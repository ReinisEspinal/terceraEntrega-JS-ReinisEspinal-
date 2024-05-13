import { DataBase } from "../db/DataBase.js";

const db = new DataBase();
let counter = 1;

export default class CustomerLog {
  constructor(userName = "", status = "") {
    this.logId = userName.concat("-", counter++, "-", status);
    this.userName = userName;
    this.status = status;
    this.date = this.CurrentDate;
  }

  static addCustomerLog(userName, status) {
    let customerLog = new CustomerLog(userName, status);
    db.lstLog.push(customerLog);
  }

  get CurrentDate() {
    const fechaActual = new Date();
    //toLocaleString() con la zona horaria deseada, se obtiene la hora y la fecha actuales en la zona horaria específica
    const horaLocal = fechaActual.toLocaleString("es-DO", {
      timeZone: "America/Santo_Domingo",
    });
    return horaLocal;
  }
}
