import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
// import {IconeFavorito} from '../IconeFavorito/ArquivoIconeFavorito'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
// import {iconeFavoritoBranco} from '../../img/favorite-white.svg'
// import {iconeFavoritoPreto} from '../../img/favorite-white.svg'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
// const FavoritoFoto = styled.img`
//   height: 30px;
//   width: 30px;
//   margin-right: 10px;
//   border-radius: 50%;
//   `


const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: "",
    comentando: false,
    numeroComentarios: "",
    favorito:false,
  }

  onClickCurtida = () => {
    let novaCurtida
    if(this.state.curtido) {
      novaCurtida = this.state.numeroCurtidas -1
    } else {
      novaCurtida = this.state.numeroCurtidas + 1
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novaCurtida
    })
    // console.log("curtiu")
  }

  // onClickComentario = () => {
  //   this.setState({
  //     comentando: !this.state.comentando
  //   })
    
  // }
  // onClickFavorito = () =>
  // this.setState({
  //   favorito: !this.state.favorito
  // })

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    // let iconeFavorito
    // if(this.state.favorito){
    //   iconeFavorito = iconeFavoritoPreto
    // } else {
    //   iconeFavorito = iconeFavoritoBranco
    // }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
       
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post