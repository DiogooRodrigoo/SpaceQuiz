import PerguntasProps from "@/data/model/Pergunta";
import { Text, View } from "react-native";
import Enunciado from "./Enunciado";

export interface QuestionarioProps {
  pergunta: PerguntasProps;
}

export default function Questionario(props: QuestionarioProps) {
  return (
    <View>
      <Enunciado enunciado={props.pergunta.enunciado} />
    </View>
  );
}
