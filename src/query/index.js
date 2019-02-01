import { gql } from 'apollo-boost'

exports.getTweetsQuery = gql`
  {
    tweets {
      codTweet
      texto
      likes
      data_publicacao
      author {
        nome
        sobrenome
        foto
      }
    }
  }
`

exports.addAuthorMutation = gql`
  mutation addAuthor($nome: String, $foto: String, $sobrenome: String){
    addAuthor(nome: $nome, foto: $foto, sobrenome: $sobrenome){
      codAuthor
    }
  }
`

exports.addTweetMutation = gql`
  mutation addTweet($texto: String, $codAuthor: String){
    addTweet(texto: $texto, codAuthor: $codAuthor) {
      codTweet
    }
  }
`