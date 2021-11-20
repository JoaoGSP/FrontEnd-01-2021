import React from "react";
import { CardGroup, Image } from "react-bootstrap";
import { Col, Container, Row, Accordion, Card } from "react-bootstrap";
import image from "../../img/meme.png";

const Main = (props) => {
  return (
    <>
      <Container>
        <Col>
          <Row>
            <CardGroup>
              <Card border="secondary">
                <Card.Body className="text-center">
                  <Card.Title>
                    Instituto de Educação Superior de Brasília - IESB
                  </Card.Title>

                  <Card.Subtitle className="mb-2 text-muted">
                    Análise e Desenvolvimento de Sistemas - Série: 4/Período: 2
                  </Card.Subtitle>
                  <Card.Text >
                    <p>
                      Projeto apresentado ao Instituto de Educação Superior de Brasília - IESB
                      como requisito para obtenção parcial de
                      nota na disciplina de Projeto Integrado - FrontEnd.
                    </p>
                    <strong>Profº:</strong> Orion Teles de Mesquita
                    <p></p>
                    <strong>Acadêmico:</strong> João Guilherme Santiago Pereira
                    - 2014290013
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary">
                <Card.Body>
                  <Image src={image} thumbnail></Image>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
          <Row>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Time</Accordion.Header>
                <Accordion.Body>
                  Significado de Time
                  <p>substantivo masculino</p>
                  Equipe de atletas que compõe um grupo esportivo; o clube do
                  qual pertencem esse atletas: o time de futebol, de vôlei, de
                  basquete; os times já chegaram para o jogo? [Por Extensão]
                  Grupo de indivíduos que se juntam para desenvolver uma mesma
                  atividade: um time de professores participou da votação. Mato
                  Grosso. Funcionários que se juntam para realizar um trabalho
                  rural. <p></p> Etimologia (origem da palavra time). Do inglês
                  team. Sinônimos de Time Time é sinônimo de: equipe, clube,
                  grupo Definição de Time Classe gramatical: substantivo
                  masculino Separação silábica: ti-me Plural: times
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Jogador</Accordion.Header>
                <Accordion.Body>
                  Significado de Jogador<p> substantivo masculino</p> Pessoa que
                  joga. Pessoa que tem o vício, a paixão do jogo: é um jogador
                  inveterado. Indivíduo que pratica certos esportes de equipe:
                  jogador de futebol.<p></p> Sinônimos de Jogador Jogador é
                  sinônimo de: praticante, atleta, esportista, aventureiro,
                  apostador, disparador, atirador, brincalhão Definição de
                  Jogador Classe gramatical: adjetivo e substantivo masculino
                  Separação silábica: jo-ga-dor Plural: jogadores Feminino:
                  jogadora
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Comissão Técnica</Accordion.Header>
                <Accordion.Body>
                  Significado de Técnico <p></p>adjetivo <p></p>Relativo a uma
                  arte ou a uma ciência: estudo técnico. substantivo masculino
                  Indivíduo que tem conhecimento prático de uma arte ou de uma
                  ciência; perito, especialista.<p></p> Sinônimos de Técnico
                  Técnico é sinônimo de: perito, profissional, especialista
                  Definição de Técnico Classe gramatical: adjetivo e substantivo
                  masculino Separação silábica: téc-ni-co Plural: técnicos
                  Feminino: técnica
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Arbitragem</Accordion.Header>
                <Accordion.Body>
                  Significado de Arbitragem <p></p>substantivo feminino<p></p>{" "}
                  Ação de arbitrar: a arbitragem de um jogo. Solução de um
                  litígio por um árbitro. Sentença assim proferida: a arbitragem
                  desempenha papel importante na solução dos conflitos coletivos
                  do trabalho. Operação de Bolsa que consiste na escolha cambial
                  entre diversas praças por comparação de preços. O mesmo que
                  arbitramento.<p></p> Sinônimos de Arbitragem Arbitragem é
                  sinônimo de: arbitramento Definição de Arbitragem Classe
                  gramatical: substantivo feminino Separação silábica:
                  ar-bi-tra-gem Plural: arbitragens
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Jogo</Accordion.Header>
                <Accordion.Body>
                  Significado de Jogo <p></p>substantivo masculino<p></p> Ação
                  de jogar; folguedo, brinco, divertimento. O que serve para
                  jogar: comprar um jogo de damas. Exercício ou divertimento
                  sujeito a certas regras: jogo de futebol. Passatempo em que se
                  arrisca dinheiro: uma dívida de jogo. Divertimento público
                  composto de exercícios esportivos: os Jogos Olímpicos. Maneira
                  de jogar. As cartas ou peças de cada jogador: ele está com um
                  bom jogo. Vício habitual de jogar: entregar-se ao jogo. Cada
                  uma das partidas ou mãos em que se divide o jogo. Série
                  completa de objetos emparelhados que formam um todo: um jogo
                  de chaves. A parte da armação de um carro onde estão as rodas:
                  o jogo dianteiro. Mecanismo da direção de um veículo. Manejo
                  de uma arma: jogo de pau. Escárnio, motejo. Manha, astúcia;
                  plano, desígnio: conheço o jogo dele. Nome de vários aparelhos
                  de física. Jogo da bolsa, transações em fundos públicos. Jogos
                  de espírito, ditos espirituosos ou brincadeiras picantes. Jogo
                  de fisionomia, expressão particular e significativa do rosto.
                  Jogo de palavras, equívoco, brincadeira baseada na semelhança
                  das palavras; trocadilho. Jogo do bicho, espécie de loteria,
                  anexa a outra, na qual se joga sobre os finais, as centenas e
                  os milhares de 0000 a 9999; cada grupo de quatro unidades
                  corresponde ao nome de um bicho (25 ao todo), de onde a sua
                  designação. Amarrar o jogo, ser cauteloso; no futebol, impedir
                  que a partida se desenvolva normalmente, abusando o juiz do
                  apito, por exemplo. Esconder o jogo, ocultar alguém suas
                  intenções. Jogo de empurra, ato de atribuir alguém a
                  responsabilidade a outra pessoa que, também, a atribui a uma
                  terceira, e assim por diante. Jogos Olímpicos, aqueles que, em
                  honra de Júpiter, se realizavam na Grécia antiga de quatro em
                  quatro anos, como ainda hoje.<p></p> Sinônimos de Jogo Jogo é
                  sinônimo de: prélio, partida, aparelho, grupo, folguedo,
                  brinco, brinquedo Definição de Jogo Classe gramatical:
                  substantivo masculino Flexão do verbo jogar na: 1ª pessoa do
                  singular do presente do indicativo Separação silábica: jo-go
                  Plural: jogos
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Main;
