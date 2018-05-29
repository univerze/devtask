# My solution

It is a sample node application to save and retrieve data from a local mongoDB database via RESTful endpoints.

## Pre-requisites
- NodeJS and NPM [https://nodejs.org/en/](https://nodejs.org/en/)
- MongoDB [MongoDB Local Server](https://www.mongodb.com/download-center?jmp=nav#community)

## How to run
First start the mongodb in your terminal

```bash
mongod
```

Then enter the project directory and install dpendencies
```bash
npm install
```

Finally start the server
```bash
npm start
```

You should see the message `app listening on port 3000` now you can send data to [http://localhost:3000/medicines](http://localhost:3000/medicines).

## Ideas

The design is following the REST best practices see it [here](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design) or [here](https://code-maze.com/top-rest-api-best-practices/)

The solution would be nicer with Docker so you don't have to install mongo and node on your host (avoid dependency clash).

Didn't have time to write unit tests but I usually use mocha and chai and make sure the code coverage is above 80%.

In a more complex solution the index file should be kept clean, maybe move the db config to a separate file.
