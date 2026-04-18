import { CrudRepository } from "./crud-repository.js";
import db from "../models/index.cjs";

const { City } = db;

export class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
}

