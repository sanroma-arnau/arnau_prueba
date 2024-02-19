import ExpeditionsPage from "./ExpeditionsPage";
import { data } from "./fake-data";

export default function App() {
  // I am putting the data here to put it somewhere for this exercise
  // This component should have all the routing and the actual data
  // should be fetched inside the pages.
  const expeditions: Expedition[] = data.found;
  return <ExpeditionsPage expeditions={expeditions} />;
}
