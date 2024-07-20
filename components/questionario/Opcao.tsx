import { Pressable, Text, StyleSheet } from "react-native";

export interface OpcaoProps {
  indice: number;
  texto: string;
  onPress: () => void;
}
export default function Opcao(props: OpcaoProps) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.texto}>{props.texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e9d48",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 50,
  },
  texto: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
});
