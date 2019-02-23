### File knox

Um Web App com o propósito de armazenar arquivos, separados por categorias e podendo criar pastas, arquivos (.pdf, .docx, .jpg, .jpeg e etc) e muito mais

---

### Tecnologias Usadas

As Tecnologias usadas dão preferência ao uso de JavaScript, tanto no Front End, quanto no Back End (no banco de dados também, com mongoDB).

- NodeJS
- ReactJS
- ExpressJS
- MongoDB
- Redux
- Docker

E diversos outros pacotes

---

### Módulos de desenvolvimento

**RF001 - Cadastro (Geral)** - Efetuar um cadastro no sistema fornecendo nome, email, senha e confirmação de senha.

**RF001 - Cadastro (API)** -

- [ ] Criar Schema (Model) de Usuário no banco de dados.
- [ ] Receber dados via POST request (nome, email, senha, confirm. senha).
- [ ] Checar erros (tamanho das strings, senhas equivalentes, email já cadastrado, dentre outros).
- [ ] Encriptação de senha (Salt).
- [ ] Salvar dados no banco de dados.
- [ ] Retornar Sucesso === true.

**RF001 - Cadastro (FRONT-END)** -

- [ ] Criar componentes para layout (Navbar, Footer, TextInput, CadastroButton).
- [ ] Criar componente statefull para a "tela" de cadastro (Conectar com Redux).
- [ ] Criar action de autenticação e reducer de autenticação.
- [ ] Enviar erros vindo da API para o reducer de erros.
- [ ] Tratar erros no componente de cadastro (componentWillReceiveNextProps).

---

### Ambiente de Desenvolvimento

- [ ] Implementar Docker/Docker-compose
- [ ] Adicionar ESlint (Airbnb style)
- [ ] Visual Studio Code (Prettier, React Snippets, AutoSave, FormatOnSave e etc)
