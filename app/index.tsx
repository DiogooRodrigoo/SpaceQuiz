import { View } from "react-native";
import Logo from "@/components/templates/Logo";
import Pagina from "@/components/templates/Pagina";
import Questionario from "@/components/questionario/Questionario";
import useQuestionario from "@/data/hooks/useQuestionario";
import Resultado from "@/components/questionario/Resultado";

export default function Index() {
  const {
    pergunta,
    responder,
    concluido,
    pontuacao,
    totalDePerguntas,
    reiniciar,
  } = useQuestionario();
  return (
    <Pagina>
      <View style={{ gap: 40 }}>
        <Logo />
        {concluido ? (
          <Resultado
            pontuacao={pontuacao}
            totalDePerguntas={totalDePerguntas}
            reiniciar={reiniciar}
          />
        ) : (
          <Questionario pergunta={pergunta} opcaoSelecionada={responder} />
        )}
      </View>
    </Pagina>
  );
}
