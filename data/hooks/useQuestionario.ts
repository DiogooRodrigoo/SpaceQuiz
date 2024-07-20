import { useState } from "react";

import todasPerguntas from "@/data/constants/PerguntasApp";

export default function useQuestionario() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [perguntas, setPerguntas] = useState(sortearPerguntas);
  const [respostas, setRespostas] = useState<number[]>([]);

  function sortearPerguntas() {
    const perguntasEmbaralhadas = [...todasPerguntas]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    return perguntasEmbaralhadas;
  }

  return {
    get pergunta() {
      return perguntas[indicePergunta];
    },

    get pontuacao() {
      return perguntas
        .map((p) => p.resposta)
        .map((r, i) => r === respostas[i])
        .filter(Boolean).length;
    },

    get concluido() {
      return indicePergunta === perguntas.length;
    },

    get totalDePerguntas() {
      return perguntas.length;
    },

    responder(resposta: number) {
      setRespostas([...respostas, resposta]);
      setIndicePergunta(indicePergunta + 1);
    },

    reiniciar() {
      setIndicePergunta(0);
      setRespostas([]);
      setPerguntas(sortearPerguntas());
    },
  };
}
