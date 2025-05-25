var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from "./crud";
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
var newRowID = CRUD.insertRow(row);
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
// DOM OUTPUT
var app = document.getElementById("app");
if (app) {
    app.innerHTML = "\n    <h1>CRUD Log</h1>\n    <ul>\n      <li>Inserted row: " + row.firstName + " " + row.lastName + "</li>\n      <li>Inserted ID: " + newRowID + "</li>\n      <li>Updated row: " + updatedRow.firstName + " " + updatedRow.lastName + ", age " + updatedRow.age + "</li>\n      <li>Deleted row ID: " + newRowID + "</li>\n    </ul>\n  ";
}
//# sourceMappingURL=main.js.map