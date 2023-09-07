import { useState } from "react";
import { FormComponent, HeaderComponent, MiOrgComponent } from "./components";

function App() {
  const [mostrarForm, setMostrarForm] = useState(true);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  };

  return (
    <>
      <HeaderComponent />
      {mostrarForm && <FormComponent />}
      <MiOrgComponent cambiarMostrar={cambiarMostrar} />
    </>
  );
}

export default App;
