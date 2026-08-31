import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "Teal",
        height: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          backgroundColor: "LightSeaGreen",
        }}
      >
        Atividade
      </h1>
      <ul
        style={{
          fontSize: "20px",
          padding: "10px",
          textDecoration: "underline"
        }}
      >
        <li>
          <Link href="/exercicio1">Exercicio1</Link>
        </li>
        <li>
          <Link href="/exercicio2">Exercicio2</Link>
        </li>
        <li>
          <Link href="/exercicio3">Exercicio3</Link>
        </li>
        <li>
          <Link href="/exercicio4">Exercicio4</Link>
        </li>
      </ul>
    </div>
  );
}
