import { useState } from "react";
import {
  EquipoComponent,
  FooterComponent,
  FormComponent,
  HeaderComponent,
  MiOrgComponent,
} from "./components";
import { equiposData, colaboradoresData } from "./data";

function App() {
  const [mostrarForm, setMostrarForm] = useState(true);
  const [colaboradores, setColaboradores] = useState(colaboradoresData);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  };

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

  console.log(colaboradores);

  return (
    <>
      <HeaderComponent />

      {mostrarForm && (
        <FormComponent
          equipos={equiposData.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <MiOrgComponent cambiarMostrar={cambiarMostrar} />

      {equiposData.map((equipo) => (
        <EquipoComponent
          key={equipo.titulo}
          {...equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
        />
      ))}

      <FooterComponent />
    </>
  );
}

export default App;
