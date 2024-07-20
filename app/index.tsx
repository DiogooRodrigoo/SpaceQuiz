import Questionario from "@/components/questionario/Questionario";
import Logo from "@/components/templates/Logo";
import Pagina from "@/components/templates/Pagina";
import PerguntasApp from "@/data/constants/PerguntasApp";
import { View } from "react-native";

export default function Index() {
  return (
    <Pagina>
      <View style={{ gap: 40 }}>
        <Logo />
        <Questionario pergunta={PerguntasApp[0]} />
      </View>
    </Pagina>
  );
}
