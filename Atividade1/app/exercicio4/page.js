import "@/app/exercicio4/stylePage.css";
export default function Exercicio4() {
  const imageBg = "/assets/image/bgExercicio1.png";

  return (
    <>
      <div className="bg">
        <h1 className="h1">Exercicio 4</h1>
        <div className="continer">
          <div className="item">
            <img
              className="imgSapato"
              src="/assets/image/sapatoCasualMasculino.png"
              alt="Sapato Casual"
            />
            <h3>Sapato Casual Masculino</h3>
            <p>R$ 250,00</p>
          </div>

          <div className="item">
            <img
              className="imgSapato"
              src="/assets/image/sapatoFinoMasculino.png"
              alt="Sapato Fino"
            />
            <h3>Sapato Fino Masculino</h3>
            <p>R$ 350,00</p>
          </div>

          <div className="item">
            <img
              className="imgSapato"
              src="/assets/image/sapatoFemininoPreto.png"
              alt="Sapato Feminino Preto"
            />
            <h3>Sapato Feminino Retrô Preto</h3>
            <p>R$ 300,00</p>
          </div>

          <div className="item">
            <img
              className="imgSapato"
              src="/assets/image/sapatoFemininoRetroVermelho.png"
              alt="Sapato Feminino Vermelho"
            />
            <h3>Sapato Feminino Retrô Vermelho</h3>
            <p>R$ 300,00</p>
          </div>

          <div className="item">
            <img
              className="imgSapato"
              src="/assets/image/sapatoFivelaMasculino.png"
              alt="Sapato Fivela Masculino"
            />
            <h3>Sapato Com Fivela</h3>
            <p>R$: 700,00</p>
          </div>
        </div>
      </div>
      <footer >Loja de Sapato</footer>
    </>
  );
}
