import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <>
      <Header></Header>
      <PrimeReactProvider>
        <Card></Card>
      </PrimeReactProvider>
    </>
  );
}

export default App;
