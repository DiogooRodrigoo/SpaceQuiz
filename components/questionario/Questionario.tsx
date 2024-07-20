import PerguntasProps from "@/data/model/Pergunta";
import { Text, View } from "react-native";
import Enunciado from "./Enunciado";
import Opcao from "./Opcao";

export interface QuestionarioProps {
  pergunta: PerguntasProps;
}

export default function Questionario(props: QuestionarioProps) {
  return (
    <View style={{ gap: 25 }}>
      <Enunciado enunciado={props.pergunta.enunciado} />
      <View style={{ gap: 10 }}>
        {props.pergunta.opcoes.map((opcao, indice) => (
          <Opcao
            key={indice}
            indice={indice}
            texto={opcao}
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
}
