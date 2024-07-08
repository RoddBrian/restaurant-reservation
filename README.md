# Restaurant Reservation System

## Description
This is a simple restaurant reservation system. It provides APIs to manage reservations using an in-memory array.


## Prerequisites
- Docker
- Docker Compose

## Getting Started
To get started with the bookstore inventory system, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/roddbrian/restaurant-reservation.git
   cd restaurant-reservation

2. **Build the Docker image**:

    ```sh
    
    docker build -t roddbrian/restaurant-reservation .

3. **Run the Docker container**:

    ```sh
    
    docker-compose up

4. **Access the APIs**:

    The API will be available at http://localhost:3000.

5. **API Endpoints**

    ## API Endpoints

    ### Add a Reservations
    - **URL**: `POST /reservations`
    - **Description**: Adds a new reservations to the register.
    - **Body**: JSON object with `name`, `date`, and `time` fields.
    
    ### Get All Reservations
    -**URL**: GET /reservations
    -**Description**: Retrieves all reservations.

    ### Update a Reservations
    -**URL**: PUT /reservations/:id
    -**Description**: Updates a reservation's status identified by `id`.
    -**Body**: JSON object with `status` field.

    Contributing
    Contributions are welcome! If you have any suggestions or found a bug, please open an issue or submit a pull request.

    This README file provides clear instructions for setting up and running the bookstore inventory system, as well as details about the available API endpoints and continuous integration setup.
