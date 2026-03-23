import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

export default function Assinatura() {
  const router = useRouter();
  const { foto } = useLocalSearchParams();
  const ref = useRef<any>(null);

  const handleConfirm = () => {
    ref.current?.readSignature();
  };

  const handleOK = (signature: string) => {
    console.log("Foto:", foto);
    console.log("Assinatura:", signature);

    Alert.alert("Sucesso", "Ponto registrado com sucesso!");
    router.back();
  };

  const handleEmpty = () => {
    Alert.alert("Erro", "Faça a assinatura antes de confirmar");
  };

  return (
    <View style={styles.container}>
      <SignatureScreen
        ref={ref}
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Assine para registrar o ponto"
      />

      {/* BOTÃO MANUAL (100% confiável) */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar Assinatura</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#22c55e",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});