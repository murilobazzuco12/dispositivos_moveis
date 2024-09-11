// src/screens/ListBichinhos.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, Alert } from 'react-native';

// Definição do tipo para os bichinhos
interface Bichinho {
  id: string;
  nome: string;
  fome: number;
  sono: number;
  diversao: number;
  imagem: string;
}

const bichinhos: Bichinho[] = [
  {
    id: '1',
    nome: 'Ghost',
    fome: 50,
    sono: 70,
    diversao: 80,
    imagem: 'https://w7.pngwing.com/pngs/1/82/png-transparent-silhouette-character-black-white-silhouette-white-animals-logo-thumbnail.png',
  },
  {
    id: '2',
    nome: 'Cavernoso',
    fome: 40,
    sono: 60,
    diversao: 90,
    imagem: 'https://w7.pngwing.com/pngs/276/47/png-transparent-wall-decal-bumper-sticker-skull-skeleton-logo-monochrome-head-thumbnail.png',
  },
];

// Função para calcular o status baseado nos atributos
const calcularStatus = (fome: number, sono: number, diversao: number): string => {
  const media = (fome + sono + diversao) / 3;
  if (media >= 70) return 'Feliz';
  if (media >= 40) return 'Neutro';
  return 'Triste';
};

const ListBichinhos: React.FC = () => {
  const renderItem = ({ item }: { item: Bichinho }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Fome: {item.fome}</Text>
        <Text>Sono: {item.sono}</Text>
        <Text>Diversão: {item.diversao}</Text>
        <Text>Status: {calcularStatus(item.fome, item.sono, item.diversao)}</Text>
      </View>
    </View>
  );

  // Função chamada ao pressionar o botão
  const handleIniciar = () => {
    Alert.alert("VAMOS COMEÇAR", "WARNING!  CUIDE DO SEU MONSTRO OU ELE TE DESTRUIRÁ");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bichinhos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Botão "Iniciar" */}
      <View style={[styles.buttonContainer, { marginTop: 50 }]}> 
        <Button title="Start pact" onPress={handleIniciar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  buttonContainer: {
    marginBottom: 100,
    alignItems: 'center',
  },
});

export default ListBichinhos;
