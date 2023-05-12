import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function showDetails(carId) {
  const car = cars.find((c) => c.id === carId);
  const detailsContainer = document.querySelector("#details-container");
  detailsContainer.innerHTML = `
      <h2>${car.make} ${car.model}</h2>
      <p>Year: ${car.year}</p>
      <p>Color: ${car.color}</p>
      <p>Price: ${car.price}</p>
    `;
}

function Detail(props) {
  const [car, setCar] = useState(null);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [trimModel, setTrimModel] = useState("");

  useEffect(() => {
    setCar(props.car);
    setManufacturer(props.car.manufacturer);
    setModel(props.car.model);
    setHorsepower(props.car.horsepower);
    setTrimModel(props.car.trimModel);
  }, [props.car]);

  const handleManufacturerChange = (e) => {
    setManufacturer(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleHorsepowerChange = (e) => {
    setHorsepower(e.target.value);
  };

  const handleTrimModelChange = (e) => {
    setTrimModel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCar({
      ...car,
      manufacturer,
      model,
      horsepower,
      trimModel,
    });
  };

  const handleClear = () => {
    setManufacturer("");
    setModel("");
    setHorsepower("");
    setTrimModel("");
  };

  if (!car) {
    return null;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="manufacturer">
        <Form.Label>Manufacturer</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter manufacturer"
          value={manufacturer}
          onChange={handleManufacturerChange}
        />
      </Form.Group>

      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter model"
          value={model}
          onChange={handleModelChange}
        />
      </Form.Group>

      <Form.Group controlId="horsepower">
        <Form.Label>Horsepower</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter horsepower"
          value={horsepower}
          onChange={handleHorsepowerChange}
        />
      </Form.Group>

      <Form.Group controlId="trimModel">
        <Form.Label>Trim Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter trim model"
          value={trimModel}
          onChange={handleTrimModelChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
      <Button variant="secondary" onClick={handleClear}>
        Clear
      </Button>
    </Form>
  );
}

export default Detail;
