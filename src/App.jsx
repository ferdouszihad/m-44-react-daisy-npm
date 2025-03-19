import LineChartComp from "./components/app/LineChart";

import PricingOptions from "./components/app/PricingOptions";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="py-5 text-5xl text-center">
        Yahoo 😀 !! Daisy Khala Came to our life again
      </h1>
      <PricingOptions></PricingOptions>
      <LineChartComp></LineChartComp>
    </>
  );
}

export default App;
