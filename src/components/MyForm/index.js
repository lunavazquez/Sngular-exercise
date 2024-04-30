import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import Total from "../Total";
import "./myForm.css";

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  const fibonacciNumber = fibonacci(n - 1) + fibonacci(n - 2);
  console.log("fibonnaci:", fibonacciNumber);
  return fibonacciNumber;
}

function TriangularNumber(num) {
  const res = (num * (num + 1)) / 2;
  console.log("triangular:", res);
  return res;
}

function primoNumber(num) {
  // Si el número es menor o igual a 1, no es primo
  if (num <= 1) {
    return false;
  }

  // Iteramos desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Verificamos si el número es divisible por i
    if (num % i === 0) {
      // Si es divisible, no es primo
      return false;
    }
  }
  console.log(num, "es primo");
  return num;
}

function MyForm() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState("");

  const handleInputNumber = (e) => {
    setInput(e.target.value);
  };

  const handleClickTotal = () => {
    const num = parseFloat(input);
    const firstAndSecondTerm = num - 2;
    const thirdTerm = num - 1;
    // Verificamos si el valor ingresado es un número
    if (!isNaN(num)) {
      // Realizamos la operación final
      const total =
        fibonacci(2) * firstAndSecondTerm +
        TriangularNumber(3) * firstAndSecondTerm -
        primoNumber(7) * thirdTerm;
      // Actualizamos el estado con el totalado de la operación
      setTotal(total);
    } else {
      // Si el valor ingresado no es un número
      setTotal("Ingresa un número válido");
    }
  };

  return (
    <div className="form">
      <p className="parrafo">
        El número fibonacci de 2 es:{" "}
        <span className="number">{fibonacci(2)}</span>
      </p>
      <p className="parrafo">
        El número triangular de 3 es:{" "}
        <span className="number">{TriangularNumber(3)}</span>
      </p>
      <p className="parrafo">
        El número primo es: <span className="number">{primoNumber(7)}</span>{" "}
      </p>

      <div className="content-form">
        <InputGroup className="mb-3 ">
          <Form.Control
            type="number"
            placeholder="Introduce un número..."
            onChange={handleInputNumber}
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            onClick={handleClickTotal}
            id="button-addon2"
          >
            Submit
          </Button>
        </InputGroup>
      </div>

      {total !== "" && <Total total={total} />}
    </div>
  );
}

export default MyForm;
