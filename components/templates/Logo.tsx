import { Text, View, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={{}}>
      <Text style={styles.titulo}>SPACE QUIZ</Text>
      <Text style={styles.subtitulo}>Perguntas de outro mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "SOLARSPACEDEMO-Regular",
    fontSize: 35,
    color: "white",
    textAlign: "center",
  },
  subtitulo: {
    fontFamily: "SPACEMISSION",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
