# Phone Auth API

Simple API that validates incoming request using firebase phone authentication api and updates a Mongo database

---

## Main features

Your task is to complete a simple movie management application by adding 4 main features:

- Get the current user profile
- Creating a new profile
- update the name and email of the profile

## Application

- each profile entity contains `id`, `name`, `email`, and `phoneNumber` fields. See typescript types in the `types.ts` file.
- `profile/dataAccess` provides method to create, get, and insert into the db.
- `profile/services` contains usecases for the profile entity
- `profile/controller` accepts http request and responses to client

## Setup

Follow these steps for correct application setup:

1. `npm install` – install dependencies
2. `npm test` – run all tests
3. `npm run db` - connects database
4. `npm start:dev` – serve the app at
   [http://localhost:5000/](http://localhost:5000/) (you can check if it works
   by opening the [http://localhost:5000/health](http://localhost:8080/health) in your
   browser or executing the `curl http://localhost:8080/health` in your terminal –
   {"status": "up"} shoule be printed).
