<div align="center">
  <h1 align="center">Reaktor junior assignment warehouse frontend 📦</h1>
  
  <p align="center">
    My take in Reaktor's junior assignment 
  </p>
</div>

## About the project

The frontend's purpose is to be a userfriendly way for the warehouse workers to check the stock status of specific items.

The frontend uses pagination to be more faster for the user. 

The frontend has been made using Typescript, React and the UI is made using Material-UI.

Unfortunately the first load of the website is pretty slow, because it fetches the data from the bad-api.

Backend: https://github.com/D3lux3/reaktorchallengebackend

## Demo

Here's link to a working demo of the whole project: https://reaktorchallengefrontend.herokuapp.com/

## Installation 🖋️

### Prerequisites

* npm and Node.js

You can install both from 
```
https://www.npmjs.com/get-npm
```

Enter these commands in to your terminal of choice.

### Step 1
Cloning the repo
```
git clone https://github.com/D3lux3/reaktorchallengefrontend

cd reaktorchallengefrontend
```

### Step 2
Create a .env file in to the root of the folder. Then enter following line in to it, and changing the *EXAMPLE* part of it to match your backends URL.
```
REACT_APP_API_URL=http://EXAMPLE
```
### Step 3
Installing dependencies and launching the frontend.
```
npm install
npm start
```
