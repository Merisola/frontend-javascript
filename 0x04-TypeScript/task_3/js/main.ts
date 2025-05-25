import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// DOM OUTPUT
const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    <h1>CRUD Log</h1>
    <ul>
      <li>Inserted row: ${row.firstName} ${row.lastName}</li>
      <li>Inserted ID: ${newRowID}</li>
      <li>Updated row: ${updatedRow.firstName} ${updatedRow.lastName}, age ${updatedRow.age}</li>
      <li>Deleted row ID: ${newRowID}</li>
    </ul>
  `;
}
