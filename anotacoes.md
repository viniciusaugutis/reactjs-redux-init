## Definições

Arquitetura Flux com Redux

Paradigma para controlar o fluxo de informações da aplicação.

Não existe uma comunicação aceitável entre dois componentes, se não forem filhos de outro etc. Componentes desconexos não tem como de forma fácil hoje sem ser por redux.

Redux possuem o store, que armazena informações e compartilhados entre vários componentes.

Toda vez que store do redux é alterado ele atualiza o estado dos componentes compartilhados.

Estado do redux é imutável também, igual o estado dos componentes.

Exemplo:

Componente faz um action para um middleware que ouve a ação e busca no estado do redux. Assim o store do redux salva as informações.

Reducers: são cada uma da propriedade dos estados. Reducer é quem vai alterar a informação dentro do estado do redux.
Reducer ouve a ação que veio do middleware e faz as alterações.

Pode ter vários reducers ouvindo uma action realizada pelo middleware.

## Instalação inicial

yarn add redux react-redux

Store: Inicializa o redux na nossa aplicação e precisa configurar o provider para pegar as informações do store.

Provider: Ele passa para todos os componentes dentro dele a informação sobre o estado do Redux. Ele usa uma API de contexto do React.