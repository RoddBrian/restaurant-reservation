const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// App configuration
const app = express();
app.use(bodyParser.json());

// Array to store reservations
let reservations = [];

// API to create a new reservation
app.post('/reservations', (req, res) => {
  const reservation = { id: uuidv4(), ...req.body };
  reservations.push(reservation);
  res.status(201).send(reservation);
});

// API to retrieve all reservations
app.get('/reservations', (req, res) => {
  res.status(200).send(reservations);
});

// API to update a reservation's status
app.put('/reservations/:id', (req, res) => {
  const reservationId = req.params.id;
  const reservationIndex = reservations.findIndex(res => res.id === reservationId);

  if (reservationIndex !== -1) {
    reservations[reservationIndex] = { ...reservations[reservationIndex], ...req.body };
    res.status(200).send(reservations[reservationIndex]);
  } else {
    res.status(404).send({ message: 'Reservation not found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
