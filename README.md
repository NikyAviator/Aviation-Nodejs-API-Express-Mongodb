# Aviation-Nodejs-API-Express-Mongodb

This is a project I am starting, to build an application for Aviation, it will first follow a course I found for me to learn the basics,
Then I will branch off and form the application to my liking.

### Request -> Router -> Controller -> Service Layer -> Data Access Layer

### Reponse -> Data Access Layer -> Service Layer -> Controller -> Router

### Controller: Handling everything related to HTTP. We deal with requests and responses for our endpoints.

Above that layer is also a little Router from Express that passes request to the corresponding controller.

### Service Layer: Handling business logic. Exports certain services (methods) which are used by the controller.

### Data Access Layer: Working with our DB. To start with we will work with local JSON file.

# Backend

```
npm install
```

start script, cd into backend/ and type:

```
npm run dev
```

(npm start (for production))
