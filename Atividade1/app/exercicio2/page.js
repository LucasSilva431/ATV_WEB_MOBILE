export default function Exercicio2() {
  const imageBg = "/assets/image/bgExercicio1.png";

  return (
    <>
      <h1
        style={{
          backgroundColor: "white",
          textAlign: "center",
          color: "Highlight",
           fontSize:"20px"
        }}
      >
        Exercicio 2
      </h1>
      <div
        style={{
          backgroundColor: "red",
          width: "700px",
          padding: "0px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "darkblue",
          }}
        >
          DIV 1
        </h1>
        <div
          style={{
            backgroundColor: "green",
            width: "700px",
            padding: "25px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "darkblue",
            }}
          >
            DIV 2
          </h1>
        </div>
        <p style={{ backgroundColor: "black", textAlign: "center" }}>
          <strong>P: </strong> Por que os dois DIV não estão completamente
          alinhados?
          <br />
          <strong>R: </strong>Pois as DIVs. estão dentro umas das outras, o que
          acaba não deixando o alinhamento correto.
        </p>
      </div>
    </>
  );
}
