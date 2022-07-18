/*
Imagine uma pasta de documentos dentro do seu computador.. podemos dizer que de certa maneira ela parece como uma estrutura de árvore certo?
Já que pode conter várias pastas dentro dela, as quais chamamos de pastas filhass.. e dentro das pastas filhass pode existir outras pastas e assim por diante...

Para esse desafio vamos imagianr que cada objeto pasta possui um atributo:

- id (Number) * obrigatório
- nome (String) * obrigatório
- filhas (Array)

Dado o exemplo abaixo da árvore de pastas:

Crie um método que recebe um ID e retorna o nome da pasta.
Caso digite um id inválido.. deve retornar a mensagem: Pasta não encontrada!

*/

const pastaDocumentos = [
  { id: 1, nome: 'downloadsTorrent' },
  {
    id: 2,
    nome: 'imagens',
    filhas: [
      { id: 4, nome: 'fotos2019' },
      {
        id: 5,
        nome: 'fotos2021',
        filhas: [
          {
            id: 10,
            nome: 'fotos_celular',
            filhas: [{ id: 11, nome: 'fotosproibidas' }],
          },
        ],
      },
      {
        id: 6,
        nome: 'fotos2022',
        filhas: [
          {
            id: 12,
            nome: 'pastaSecreta',
            filhas: [
              {
                id: 13,
                nome: 'prints',
                filhas: [
                  { id: 14, nome: 'instagram' },
                  { id: 15, nome: 'tiktok' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nome: 'faculdade',
    filhas: [
      {
        id: 7,
        nome: 'desenvolvimento web',
        filhas: [{ id: 17, nome: 'slides' }],
      },
      { id: 8, nome: 'lógica', filhas: [{ id: 16, nome: 'pdfsAula' }] },
      {
        id: 9,
        nome: 'algoritmos',
        filhas: [
          {
            id: 18,
            nome: 'semestrePassado',
            filhas: [{ id: 19, nome: 'provas' }],
          },
        ],
      },
    ],
  },
];

let resultadoBusca = '';

function exibeNomePasta(pasta, id) {
  // seu código aqui
}

exibeNomePasta(pastaDocumentos, 16);
console.log(resultadoBusca);
