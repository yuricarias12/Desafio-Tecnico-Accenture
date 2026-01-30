class BookStoreApiPage {
  criarUsuario() {
    const user = {
      userName: `user_${Date.now()}`,
      password: "Senha@123"
    };

    cy.wrap(user).as("user");

    cy.api({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      body: user
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body.userID).as("userId");
    });
  }

  gerarToken() {
    cy.get("@user").then((user) => {
      cy.api({
        method: "POST",
        url: "https://demoqa.com/Account/v1/GenerateToken",
        body: user
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.token).as("token");
      });
    });
  }

  validarAutorizacao() {
    cy.get("@user").then((user) => {
      cy.api({
        method: "POST",
        url: "https://demoqa.com/Account/v1/Authorized",
        body: user
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eq(true);
      });
    });
  }

  listarLivros() {
    cy.api("https://demoqa.com/BookStore/v1/Books")
      .then((response) => {
        expect(response.status).to.eq(200);
        const livros = response.body.books.slice(0, 2);
        cy.wrap(livros).as("livrosSelecionados");
      });
  }

  alugarLivros() {
    cy.get("@livrosSelecionados").then((livros) => {
      cy.get("@userId").then((userId) => {
        cy.get("@token").then((token) => {
          cy.api({
            method: "POST",
            url: "https://demoqa.com/BookStore/v1/Books",
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: {
              userId,
              collectionOfIsbns: livros.map(l => ({ isbn: l.isbn }))
            }
          }).then((response) => {
            expect(response.status).to.eq(201);
          });
        });
      });
    });
  }

  validarLivrosNoUsuario() {
    cy.get("@userId").then((userId) => {
      cy.get("@token").then((token) => {
        cy.api({
          method: "GET",
          url: `https://demoqa.com/Account/v1/User/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response) => {
          expect(response.status).to.eq(200);

          const { username, books } = response.body;

          cy.log("**--- DETALHES DO USUÁRIO ---**");
          cy.log(`**Usuário:** ${username}`);
          cy.log(`**ID:** ${userId}`);

          if (books.length > 0) {
            cy.log("**Livros Alugados:**");
            books.forEach((book, index) => {
              cy.log(`${index + 1}. **Título:** ${book.title} | **Autor:** ${book.author} | **ISBN:** ${book.isbn}`);
            });
          } else {
            cy.log("*Nenhum livro encontrado.*");
          }

          console.table(books);
        });
      });
    });
  }
}

export default new BookStoreApiPage();
