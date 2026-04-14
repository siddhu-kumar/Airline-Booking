`src` -> Project source code
  - `config` -> Setup of library or module resides in config folder. For example: setting up `dotenv` for environment varialbles in `server-config.js`.


  - `routes` ->   In this folder we register routes and the corresponding middleware and controllers to it.

    - `middlewares` -> Intercepts incoming request and write validators, authenticators etc.

    - `controllers` -> This foler will contain business layer logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, business layer will return output, we structure the API response in controllers and send the output.

    - `repositories` -> this folder contains all the logic using which we interact the DB writing queries, all the raw queries or ORM queries.

    - `services` => contains the business logic and interacts with repositories for data from the database.

    - `utils` -> contains helper method, error classes etc.

# Setup the project

  - In the root directory create a `.env` file and add the following env variables

  ```
    PORT=<port on host server>
  ```
    ex: 
  ```
    PORT = 3000
  ```

  - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```