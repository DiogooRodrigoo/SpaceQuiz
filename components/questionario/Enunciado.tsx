import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface EnunciadoProps {
  enunciado: string;
}

export default function Enunciado(props: EnunciadoProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradient}
      />
      <Text style={styles.texto}>{props.enunciado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#852e9c",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  texto: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.8,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
