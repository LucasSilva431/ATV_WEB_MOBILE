export default function Exercicio3() {
  const imageBg = "/assets/image/bgExercicio1.png";

  return (
    <div
      style={{
        textAlign: "center",
         backgroundColor: "MidnightBlue",
         height: "100vh",
      }}
    >
      <h1
        style={{
          backgroundColor: "white",
          textAlign: "center",
          color: "Highlight",
          fontSize: "20px",
        }}
      >
        Exercicio 3
      </h1>

      <p style={{ textDecoration: "underline", fontFamily: "Arial" }}>
        Universidade Católica de Pernambuco - UNICAP
      </p>
      <a
        style={{ fontWeight: "bold", fontFamily: "Times New Roman", color:"DodgerBlue" }}
        href="https://portal.unicap.br/graduacao#presencial/"
      >
        Link da intituição{" "}
      </a>
      <br />
      <a
        style={{ fontWeight: "bold", fontFamily: "Times New Roman", color:"DodgerBlue" }}
        href="https://portal.unicap.br/biblioteca"
      >
        Link da biblioteca{" "}
      </a>
    </div>
  );
}
