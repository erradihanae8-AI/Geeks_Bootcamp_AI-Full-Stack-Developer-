
import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {

  const carinfo = {
    name: "Ford",
    model: "Mustang"
  };

  return (
    <div className="p-6">

      <h3>Exercise 1: Car and Garage</h3>
      <Car carInfo={carinfo} />

      <hr />

      <h3>Exercise 2: Events</h3>
      <Events />

      <hr />

      <h3>Exercise 3: Phone</h3>
      <Phone />

      <hr />

      <h3>Exercise 4: useEffect</h3>
      <Color />

    </div>
  );
}

export default App;