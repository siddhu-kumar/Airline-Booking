import { CrudRepository } from "./crud-repository.js";
import db from "../models/index.cjs";

const { Airplane } = db;

export class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

