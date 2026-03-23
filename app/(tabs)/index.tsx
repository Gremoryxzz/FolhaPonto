import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const handleEntrada = async () => {
    try {
      // pedir permissão
      const permission = await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert("Erro", "Permissão da câmera é obrigatória");
        return;
      }

      // abrir câmera
      const result = await ImagePicker.launchCameraAsync({
        quality: 0.5,
      });

      if (!result.canceled) {
        const foto = result.assets[0].uri;

        console.log("Foto capturada:", foto);

        // navegar para assinatura
        router.push({
          pathname: "/assinatura" as any,
          params: { foto },
        });
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  const handleSaida = () => {
    console.log("Saída registrada");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peixaria Pai e Filho</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.status}>Fora do expediente</Text>
      </View>

      <TouchableOpacity style={styles.buttonEntrada} onPress={handleEntrada}>
        <Text style={styles.buttonText}>Registrar Entrada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSaida} onPress={handleSaida}>
        <Text style={styles.buttonText}>Registrar Saída</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.info}>Último registro: --:--</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  label: {
    color: "#94a3b8",
    fontSize: 16,
  },
  status: {
    color: "#22c55e",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonEntrada: {
    backgroundColor: "#22c55e",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonSaida: {
    backgroundColor: "#ef4444",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
  },
  info: {
    color: "#cbd5f5",
  },
});