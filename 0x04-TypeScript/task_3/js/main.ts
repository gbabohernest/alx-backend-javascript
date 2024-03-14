/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

// testing
/* const obj = { firstName: 'Guillaume', lastName: 'Salva' };
CRUD.insertRow(obj);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
 */
