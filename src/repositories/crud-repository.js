import { Logger } from "../config/index.js";

export class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
      try{
        const response =  await this.model.create(data);
        return response;
      } catch(error){
        Logger.error('Something went wrong in the Crud Repository layer : create method');
        throw error;
      }
    }
    
    async destroy(data) {
      try {
        const response = await this.model.destroy({
          where: {
            id: data
          }
        });
        return response;
      } catch (error) {
        Logger.error('Something went wrong in the Crud Repository layer : destroy method');
        throw error;
      }
    }

    async get(data) {
      try {
        const response = await this.model.findByPk(data);
        return response;
      } catch (error) {
        Logger.error('Something went wrong in the Crud Repository layer : get method');
        throw error;
      }
    }

    async getAll() {
      try {
        const response = await this.model.findAll();
        return response;
      } catch (error) {
        Logger.error('Something went wrong in the Crud Repository layer : getAll method');
        throw error;
      }
    }

    async update(id, data) {
      try {
        const response = await this.model.update(data, {
          where: {
            id:id
          }
        });
        return response;
      } catch (error) {
        Logger.error('Something went wrong in the Crud Repository layer : update method');
        throw error;
      }
    }
}