/* 1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos. */
function exercicio1(){
      const produtos = {
            nome: 'mouse',
            preco: '90',
      }
      document.write(produtos.nome);
      document.write('</br>')
      document.write(produtos.preco);
}

/* 2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade. */

function exercicio2() {
      const notebook = {
            processador: 'i7',
            memoria: '16GB',
            preco: 5000,
            hd: '1TB',
            ssd: '256GB',
      }
      document.write(`O Notebook tem processador ${notebook.processador}, Memoria: ${notebook.memoria}, com o valor de R$: ${notebook.preco}, com o HD de ${notebook.hd}, com o ssd de ${notebook.ssd}`);
      
      
}

/* 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de '2 alunos. */

function exercicio3(){
      
      const aluno1 = {
            nome: 'Dionei',
            nota1: 5,
            nota2: 6,
      }
      const aluno2 = {
            nome: 'Ana',
            nota1: 9,
            nota2: 7,
      }
      
      document.write(`O(a) aluno(a) ${aluno1.nome}, com a nota ${aluno1.nota1} e ${aluno1.nota2} sendo sua media de ${((aluno1.nota1 + aluno1.nota2) / 2).toFixed(2)}. `)
      document.write(`O(a) aluno(a) ${aluno2.nome}, com a nota ${aluno2.nota1} e ${aluno2.nota2} sendo sua media de ${((aluno2.nota1 + aluno1.nota2) / 2).toFixed(2)}. `)
      
      document.write(`A Media dos aluno é ${((aluno1.nota1 + aluno1.nota2 + aluno2.nota1 + aluno1.nota2) / 4).toFixed(2)}`)
      
}
      

      /* 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 */

function exercicio4(){
      const usuarios = [
            //MOCKS
      /*       {
                  nome: 'dionei',
                  idade: 31,
                  trabalha: true,
                  salario: 2400,
            },
            {
                  nome: 'ana',
                  idade: 31,
                  trabalha: false,
                  salario: 2500,
            },
            {
                  nome: 'carlos',
                  idade: 31,
                  trabalha: true,
                  salario: 1500,
            },
            {
                  nome: 'paulo',
                  idade: 31,
                  trabalha: true,
                  salario: 3000,
            },
            {
                  nome: 'andre',
                  idade: 31,
                  trabalha: false,
                  salario: 1500,
            },
            
       */
      ]
      
      let trabalhando = []
      let naoTrabalhando = []
      let salarioAlto = []
      let salarioBaixo = []
      
       let continuar = true
       while (continuar) {
            const nome = prompt('digite o nome de uma pessoa')
            const idade = Number(prompt('digite o idade de uma pessoa'))
            const trabalha = confirm('Esta trabalhando??')
            const salario = parseFloat(prompt(('Qual o seu salario')))
      
            const usuario = {
                  nome,
                  idade,
                  trabalha,
                  salario
            }
      
            usuarios.push(usuario)
      
            continuar = confirm('deseja continuar?')
      
      }  
      console.log(usuarios);
      for(let usuario of usuarios){
            if(usuario.trabalha === true){
                  trabalhando.push(usuario)
            }else{
                  naoTrabalhando.push(usuario)
            }
      }
      
      for(let usuario of usuarios){
            if(usuario.salario > 2500 && usuario.trabalha === true){
                  salarioAlto.push(usuario)
            } 
            if(usuario.salario < 2500 && usuario.trabalha === true){
                  salarioBaixo.push(usuario)
            }
      }
      
      for(let usuario of naoTrabalhando){
            document.write(`Desempregado: Nome ${usuario.nome} com ${usuario.idade} anos.<br>`)
      }
      
      for(let usuario of salarioAlto){
                  document.write(`Empregado com salario MAIOR: Nome ${usuario.nome} com ${usuario.idade} de anos e o salario de ${usuario.salario} reais.<br>`)
            }
      for(let usuario of salarioBaixo){
            if(usuario )
            document.write(`Empregado com salario MENOR: Nome ${usuario.nome} com ${usuario.idade} de anos e o salario de ${usuario.salario }reais.<br>`)
      }
      
      
      

}
