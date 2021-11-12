import React, { Component } from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';



function App() {
  return (
    <GlobalStyle>
      <AppContainer>
        <PageSectionContainer>
          <PageSectionContainerh2>Dados pessoais</PageSectionContainerh2>
          <CardGrande
            imagem='https://scontent.faqa1-1.fna.fbcdn.net/v/t1.6435-9/121141969_3462708367149509_3104235695511315889_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGqx4K95n6P0SlPQ3EmWTGB5oADDImZJS_mgAMMiZklL5cuIUVGlgrcu8EFZ_6kks6HWlQtIsGYMjlX3d9SNhs-&_nc_ohc=CMrri-sNAKIAX_NHjMu&_nc_oc=AQkYECb3r7lg1B1iCT4YYOfTKxeLVh3rc9Z0k_zwCLxiFYmMu2dgMoBZ32j6nfXgPufDvedcgRNqEAFeDC-Tim3n&_nc_ht=scontent.faqa1-1.fna&oh=025f3439079a2e18ed96460f8828284c&oe=61A6783D'
            nome="Juliana Scandola Frossard"
            descricao="Oi, eu sou Juliana. Sou estudante da Labenu."
          />

          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </PageSectionContainer>
        <div>
          <CardPequeno
            img="https://thumbs.dreamstime.com/b/%C3%ADcone-preto-do-telefone-82257997.jpg"
            armazenar="Telefone"
            informacao="(16)9917*866*"
          />
          <CardPequeno
            img="https://thumbs.dreamstime.com/b/%C3%ADcone-de-correio-no-estilo-simples-s%C3%ADmbolo-eletr%C3%B4nico-plano-email-em-isolado-fundo-branco-pictograma-envelope-aberto-preto-para-165006383.jpg"
            armazenar="E-mail:"
            informacao="ju.teste123@email.com"
          />
          <CardPequeno
            img="https://media.istockphoto.com/vectors/home-location-icon-trendy-home-location-logo-concept-on-white-from-vector-id1125421846?k=20&m=1125421846&s=170667a&w=0&h=muuibLaIerpZOjygAVDOnjmg9r08n1GQuKl4Rbz9lWA="
            armazenar="Endereço:"
            informacao="Rua Maestro João Seppe 303-SP"
          />

        </div>


        <PageSectionContainer>
          <PageSectionContainerh2>Experiências profissionais</PageSectionContainerh2>
          <CardGrande
            imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
            nome="Labenu"
            descricao="Aluna em aprimoramento de informações."
          />

          <CardGrande
            imagem="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa631c35a-3e6e-4b7d-a7b0-49bddc325e29%2F4food.png?table=block&id=1895b678-e4ce-4e1f-82ea-c04f7a52704c&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1000&userId=c288890e-d09c-432b-a187-ac5bb50a1721&cache=v2"
            nome="Autonoma"
            descricao="Desenvolvedora de sites."
          />

          <CardGrande
            imagem="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png"
            nome="Projeção futura"
            descricao="Funcionária da empresa Google."
          />


        </PageSectionContainer>

        <PageSectionContainer>
          <PageSectionContainerh2>Minhas redes sociais</PageSectionContainerh2>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://davidmeessen.com/wp-content/uploads/2020/09/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"
            texto="Instagram"
          />
        </PageSectionContainer>
      </AppContainer>
    </GlobalStyle>
  );
}

export default App;

const GlobalStyle = createGlobalStyle
`
  body {
    margin: 0;
    padding: 0;
  }
`
const AppContainer = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div
  `
  width: 40vw;
  margin: 10px 0;
`
// const PageSectionContainerh3=styled.PageSectionContainerh3
// `
//   text-align: center;
//   margin-bottom: 20px;
// `

const PageSectionContainerh2 = syled.h2
`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`
