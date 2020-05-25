# Intelligent Delivery

![GitHub top language](https://img.shields.io/github/languages/top/camilolaiton/IntelligentDelivery)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
[![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)
[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)
[![npm version](https://badge.fury.io/js/sequelize.svg)](https://badge.fury.io/js/sequelize)

Intelligent Delivery is a web page built with ReactJS, NodeJS and MySQL enabled for real-time order management with offline storage. Also, we implemented Selenium for web page testing.

**Table of Contents**

[TOCM]

# Features

+ Administrator services
    + Create orders
    + Deliver client orders
    + Administrative searches
+ Client services
    + Create orders
    + Find an order from your order list
    + Cancel an order
	+ Pay an order (simulation)
	+ Filter orders

# Overview

## Login Page View
## Manage Deliveries View

#  Deployment diagram
This web page is built with NodeJs for the backend development, ReactJS for frontend and Sequelize as the ORM. Also, Material-UI is a used framework in the frontend side.

![DeploymentDiagram](https://raw.githubusercontent.com/camilolaiton/IntelligentDelivery/master/deployment%20diagram/deployment%20diagram.png)

> Intelligent Delivery Deployment Diagram

# Installing
## Cloning repository 
```sh
$ git clone https://github.com/camilolaiton/IntelligentDelivery.git
```

## Database information
After cloning the repository, go to:

```sh
 $ cd IntelligentDelivery/intel_delivery/database_info
```
There you can find all the database information. Create the model with ***delivery_model.mwb*** and and insert information with the sql script ***script_delivery.sql***.

### Model

![DatabaseModel](https://raw.githubusercontent.com/camilolaiton/IntelligentDelivery/master/intel_delivery/database_info/intel_delivery_model.png)

> Intelligent Delivery Database Model

## Usage

### Running the backend server

The backend server is running in port 5000 by default.

```sh
$ cd IntelligentDelivery/intel_delivery
$ sudo npm run start
```

### Running the frontend server

The frontend is running in port 3000 by default.

```sh
$ cd IntelligentDelivery/intel_delivery/views
$ sudo npm run start
```

### That's it! 

Now you can go to your browser and go to your localhost in port 3000. Over there you will find the login page.

# Tests
We implemented [Selenium](https://www.selenium.dev/) for automated testing in Python.

You can find the testing repository of this project [here](https://github.com/cristianvergel5/Test_Intel_Delivery) where you could find all the information and how to run the tests.

# End
  If you want to improve this repository, please send a pull request and I will read your code. If I consider it helps then I will accept.
  **Thanks for reading**

# Authors
- [**Camilo Laiton**](https://github.com/camilolaiton)
- [**Cristian Vergel**](https://github.com/cristianvergel5)

------------
If you want to communicate with me then go to my [**Github Account**](https://github.com/camilolaiton) and there is my **Instagram's profile**. You can send me a message.

> Check also my other repositories. You might find them interesting.

**Spoken Languages** :blush:
1. **Spanish** :es:
2. **English** :us:
3. **French** :fr:

------------

See also the list of [contributors](https://github.com/camilolaiton/IntelligentDelivery/graphs/contributors) who participated in this project directly from the repository.