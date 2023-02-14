import React from "react";
import * as SQLite from expo

const db =SQLite.openDatabase('dbhoteles.db')
const [isloading, setisloading]=