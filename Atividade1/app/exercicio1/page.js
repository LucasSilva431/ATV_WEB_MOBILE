export default function Exercicio1() {
  const imageBg = "/assets/image/bgExercicio1.png";

  return (
    <div
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ backgroundColor: "red", border: "2px solid green" , textAlign: "center", fontSize:"20px" }}>
        Primerio Exercicio de CSS
      </h1>
    </div>
  );
}
