# This is a template for week 18 Progressive Web Application homework, Budget Tracker.
- Strongly recommended to view this document using 'open preview' function in VS code. right click the tap on top and click open preview, or in PC ```Ctrl + Shift + V``` or Mac ```Command + Shift + V```
## Template code provided to you is already fully working application that tracks budget.
```
Your task is to convert the application into PWA that work both online & off-line.
```

### `The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.`

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

## User Story
```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

## Getting Started

 * You will require MongoDb & node already installed in your device.

`1. install dependencies by typing code below to console of your choosing.`
```JavaScript
npm i
```
`2. start the server by typing code below to console of your choosing.`
```javascript
npm start
```
`You will be able to access the application through localhost:3000`

## Make the application offline/online compatible.

You will require to implent the following:

* ServiceWorker
* IndexDb
* Manifest.json

Start creating corresponding methods in seperate files.
  When you are finished, you should have following file structures.
```
BudgetTackers-template
        ㄴ-models
          ㄴ-transaction.js
        ㄴ-public
          ㄴ-icons
            ㄴ-icon-192x192.png
            ㄴ-icon-512x512.png
          ㄴ-index.html
          ㄴ-index.js
          ㄴ-styles.css
          ㄴ-service-worker.js
          ㄴ-manifest.json
          ㄴ-db.js
        ㄴ-routes
          ㄴ-api.js
        ㄴ-package.json
        ㄴ-package-lock.json
        ㄴ-node_modules
        ㄴ-.gitignore
        ㄴ-server.js
```

### * Be sure to start your homework early, and do not hesitate to ask your instructional staff for any questions. 
### * Feel free to change/improve the code if you want extra credit/make us go ``WOW`` 😮.

> _made with lots of love by Chris Song_ ❤️