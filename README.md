# FTX Hackathon 2021 - Service subscriber
The service has 2 parts:  
- Frontend (written in ReactJS)  
- Backend (written in NestJS)  

## Setup Instructions
- Clone backend from [here](https://github.com/bitsatebyte/ftx-2021-backend)
- Clone the frontend from [here](https://github.com/iamkrmn/ftx-aggregator)
- `cd ftx-2021-backend` and run `docker-compose up -d` to bring up the postgres container
- In the same folder run `npm i` to install the required dependencies
- Once the dependencies have been installed, run `npm run start:dev` to start the dev server
- Next, `cd ftx-aggregator` and run `npm i` for the frontend
- after installing the dependencies, run `npm run start` and since the port `3000` is already  
being used by the backend, it will prompt you to choose a different port, press `y` on the keyboard
- navigate to `localhost:3001` to checkout the project (customer dashboard)
- navigate to `localhost:3001/service` to checkout the servic dashboard

### Links
[customer dashboard](http://localhost:3001)  
[service dashboard](http://localhost:3001/service)

## Description
There are 2 types of users for the service  
- Customer who can subscribe to services  
- Establishments that provide the services  

A customer can:  
- subscribe to a service (order type or appointment type subscription)  
- pause/resume/cancel a subscription  
- allocate budget to subscription to avail services  
- choose a default order/appointment with an establishment
- edit the default order/appointment to a custom one
- recharge wallet balance

An establishment of type order can:
- process -> accept/cancel -> deliver an order

An establishment of type appointment can:  
- process -> confirm/cancel an appointment  

A subscription can:
- be allocated a budget throughout the entire period of subscription
- have a maximum of 90 days before it expires
- be paused/resumed/cancelled
- have the remaining budget carry-forwarded to the next subscription, should a customer choose to do so

The system will:
- place an order/schedule an appointment 10 minutes/60 minutes prior to the customer's chosen time
- choose a custom order/appointment should a customer edit it 2-24 hours before the chosen time
- place the default order/appointment if no customer order/appointment was chosen

An establishment can:
- view the orders/appointments in a tabular format
- accept or cancel the orders/appointments
