import React from "react";

export default function WeatherDisplay(props) {
  let data = props.data;
  //   console.log(data.temperature);

  return (
    <div>
      <p>
        <span
          style={data.temperature > 20 ? { color: "red" } : { color: "blue" }}
        >
          Temperature: {data.temperature}
        </span>
      </p>
      <p>Condition: {data.conditions}</p>
    </div>
  );
}
