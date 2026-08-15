import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img src="react-01/public/'image copy.png" width="400" heigth="300" alt="imagem"></img>
        <a href="#link">va até o link </a>
        <h1>Lista de plantas silvestres na Amazônia</h1>
        <p>A lista de plantas silvestres da Amazônia inclui todas as espécies endêmicas da
          vegetação da Amazônia. <br /> Segundo Giacometti (1990), é estimada a existência de
          800 espécies vegetais de valor econômico ou social nesta floresta. Elas foram listadas
          abaixo de acordo com a família à qual pertencem.</p>
        <h2>Bromeliaceae</h2>
        <p>Bromeliaceae Juss. é uma família de monocotiledôneas, que segundo a
          classificação filogenética AGP III (2009) <br /> pertence à ordem dos Poales, com plantas
          terrestres, rupícolas ou, principalmente epífitas, possui 3.172 espécies, distribuídas em
          58 gêneros.</p>
        <h2>Chrysobalanaceae</h2>
        <p>Chrysobalanaceae é uma família de plantas angiospérmicas  (plantas com flor -
          divisão Magnoliophyta), pertencente à ordem Malpighiales.</p>

        <pre>
          - texto é destacado em negrito
          e dada ênfase ao seu conteúdo
        </pre>

        <a id="link" href="https://www.webambiente.cnptia.embrapa.br/publico/especies.xhtml"> Clique para ver as plantas Amazônicas </a>
      </main>
    </div>
  );
}
