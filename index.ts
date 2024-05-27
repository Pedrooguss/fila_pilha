import Fila from './fila';
import { Aluno, Filas } from './types';

const alunos: Aluno[] = [
  "João",
  "Felipe",
  "Maria",
  "José",
  "Ana",
  "Carlos",
  "Pedro",
  "Paulo",
  "Lucas",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Rafael",
  "Ricardo",
  "Jorge",
  "Miguel",
];

// Função para distribuir os alunos em filas
const distribuirAlunosEmFilas = (alunos: Aluno[], numeroDeFilas: number): Filas => {
  const filas: Filas = [];
  for (let i = 0; i < numeroDeFilas; i++) {
    filas.push([]);
  }
  
  alunos.forEach((aluno, index) => {
    const filaIndex = index % numeroDeFilas;
    filas[filaIndex].push(aluno);
  });

  return filas;
};

// Número de filas na sala de aula
const numeroDeFilas = 4;
const filasDeAlunos = distribuirAlunosEmFilas(alunos, numeroDeFilas);

// Criar filas usando a classe Fila
const filas: Fila<FilaDeAlunos> = new Fila();

filasDeAlunos.forEach(filaDeAlunos => {
  const fila = new Fila<Aluno>();
  filaDeAlunos.forEach(aluno => fila.enqueue(aluno));
  filas.enqueue(fila);
});

// Simulação da saída dos alunos por ordem de fileira e cadeira
while (!filas.isEmpty()) {
  const filaAtual = filas.dequeue();  
  if (filaAtual) {
    while (!filaAtual.isEmpty()) {
      const aluno = filaAtual.dequeue();
      if (aluno) {
        console.log(aluno);
      }
    }
  }
}
