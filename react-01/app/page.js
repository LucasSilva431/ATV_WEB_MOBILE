import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <body>
          <img src="https://avatars.githubusercontent.com/u/47857216?s=280&v=4" />
          <audio src="http://www.w3schools.com/tags/horse.mp3" controls>
             Testando o CAVALO
          </audio>
          <a href="#link">
            {" "}
            <u>Vai para o link para a casa do dado</u>{" "}
          </a>
          <h1>
            {" "}
            <b><ins>Banco de dados </ins></b>
          </h1>

          <di>
            <h2>
              {" "}
              <strong>Introdução</strong>{" "}
            </h2>
            <p>
              Na informática, banco de dados (português brasileiro) ou base de
              dados (português europeu) é um conjunto de arquivos ou dados
              relacionados, contendo registros sobre pessoas, lugares ou
              informações em geral, normalmente acessíveis de maneira
              eletrônica. É um tipo de armazenamento de dados baseado no uso de
              um sistema de gerenciamento de banco de dados (DBMS) - um software
              que interage com usuários finais, aplicativos e com o próprio
              banco de dados, para captura e análise. O DBMS também abrange os
              recursos essenciais fornecidos para administrar o banco de dados.
              A soma total do banco de dados, do DBMS e dos aplicativos
              associados pode ser chamada de sistema de banco de dados. Muitas
              vezes, o termo "banco de dados" também é usado de forma vaga para
              se referir a qualquer DBMS, sistema de banco de dados ou um
              aplicativo associado ao banco de dados.
            </p>
            <br />
            <p>
              Os bancos de dados tornaram-se a principal fonte de armazenamento
              de dados para sistemas de informação e segurança. Frequentemente,
              eles permanecem por muitos anos sem alterações significativas em
              sua estrutura sistemática.
            </p>
            <br />

            <p>
              <mark>
                Os bancos de dados são operados por Sistemas Gerenciadores de
                Bancos de Dados (SGBD), que surgiram na década de 1970.[6][7]
                Antes do advento desses sistemas, as aplicações utilizavam os
                sistemas de arquivos do sistema operacional para armazenar suas
                informações.[7][8] Na década de 1980, a tecnologia de SGBDs
                relacionais passou a dominar o mercado e, atualmente, é
                amplamente utilizada em praticamente todos os bancos de dados.
              </mark>
            </p>
            <br />
            <p>
              Os mais utilizados atualmente são nomeados de SGBD relacionais
              <sub>[9][10][11] </sub>, como os presentes nas tecnologias de
              banco de dados MySQL, Oracle, PostgreSQL, Microsoft SQL Server,
              entre outros sistemas que gerenciam bases de dados. Outro tipo
              notável é o SGBD orientado a objetos, implementado em bancos de
              dados com estruturas complexas ou aplicações que mudam
              constantemente.
            </p>
            <br />
            <p>
              A principal aplicação dos bancos de dados é o controle de
              operações empresariais, normalmente armazenando dados relevantes
              para a gestão de um negócio, como dados de clientes, funcionários,
              fornecedores e outras informações. Outra aplicação importante é o
              gerenciamento de informações de estudos, como fazem os Bancos de
              Dados Geográficos, que reúnem informações como mapas, imagens de
              satélite, pontos, linhas, áreas, entre outros dados geográficos
            </p>
            <br />
            <hr />
            <br />
          </di>

          <div>
            <h2>
              {" "}
              <i>Historia</i>
            </h2>
            <p>
              Diante da necessidade humana de registrar os eventos e informações
              relevantes, foram criadas diversas técnicas com esse fim.
              Técnicas, como pinturas pré-históricas, hieróglifos, escrita
              cuneiforme e, posteriormente, a própria escrita alfabética, foram
              usadas como meios para registrar dados. Com a invenção do papel em
              meados de 105 d.C. e, posteriormente, no âmbito ocidental, da
              prensa móvel de Gutenberg, as tecnologias de impressão evoluíram
              muito, especialmente a partir do século XV, quando o papel passou
              a ser o meio físico mais comum de registro de informações.
            </p>

            <p>
              <del>Essa herança</del> fez com que no início da era
              computacional, se usasse o papel perfurado e, depois, o cartão
              perfurado em máquinas, ambos idealizados por Herman Hollerith,
              fundador da International Business Machines (IBM). O uso do papel
              como um meio indispensável de armazenamento pode ser encontrado em
              bancos de dados não computadorizados, como ocorre com arquivos de
              aço, fichas e <sup>[12][13]</sup>
              pastas.
            </p>
          </div>
          <br />

          <div>
            <p>
              <em>Bora para casa do caralhos?</em>{" "}
            </p>
            <hr />
            <a id="link" href="https://casadosdados.com.br/" target="_blank">
              <img
                src="https://casadosdados.com.br/static-v2/img/logo-mini-v2.jpeg"
                alt="Imagem da casa do caralho"
                width="200"
                height="200"
              />
            </a>

            <hr />
            <video
              src="https://www.w3schools.com/tags/movie.mp4"
              controls
            ></video>
          </div>
        </body>
      </main>
    </div>
  );
}
