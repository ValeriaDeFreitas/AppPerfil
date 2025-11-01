import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "@/GlobalStyles";

export default function HomeScreen() {
  // Exemplo de dados de perfil; substitua por dados reais conforme necessário
  const profile = {
    nome: "",
    sobrenome: "",
    idade: undefined,
    instituicao: "",
    curso: "",
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Bem-vindo ao App de Perfil</Text>
      <View style={GlobalStyles.card}>
        <Text
          style={[
            GlobalStyles.text,
            { textAlign: "center", color: "#DC143C", fontSize: 20 },
          ]}
        >
          Bem vindo ao aplicativo! Use a aba "Perfil" para visualizar e editar
          suas informações pessoais.
        </Text>
      </View>
      <View style={GlobalStyles.card}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/ti/vetor-gratis/p1/48972540-rosa-do-utilizador-icone-arredondado-perfil-icone-vetor.jpg",
          }}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />
        <Text>
          <Text style={GlobalStyles.label}>
          O que é o PerfilApp? Imagine que você tem uma ficha cadastral digital sempre à mão,
          no seu celular. Ele é como uma carteira digital onde você guarda:
          </Text>

          <View>
            <Text style={GlobalStyles.text}>
              • Nome
            </Text>
            <Text style={GlobalStyles.text}>
              • Sobrenome
            </Text>
            <Text style={GlobalStyles.text}>
              • Idade
            </Text>
            <Text style={GlobalStyles.text}>
              • Instituição
            </Text>
            <Text style={GlobalStyles.text}>
              • Curso
            </Text>
          </View>
        </Text>
      </View>
    </View>
  );
}
