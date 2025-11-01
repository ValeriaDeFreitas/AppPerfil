import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyles } from '@/GlobalStyles';
// Update the path below if your EditProfileModal is in a different location
import EditProfileModal from '@/components/edit-modal';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    instituicao: '',
    curso: ''
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('userProfile');
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  };

  const handleSaveProfile = async (updatedProfile: React.SetStateAction<{ nome: string; sobrenome: string; idade: string; instituicao: string; curso: string; }>) => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
    }
  };

  return (
    <ScrollView style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Meu Perfil</Text>
      
      <View style={GlobalStyles.card}>
        <Text style={GlobalStyles.label}>Nome</Text>
        <Text style={GlobalStyles.text}>
          {profile.nome || 'Não informado'}
        </Text>

        <Text style={GlobalStyles.label}>Sobrenome</Text>
        <Text style={GlobalStyles.text}>
          {profile.sobrenome || 'Não informado'}
        </Text>

        <Text style={GlobalStyles.label}>Idade</Text>
        <Text style={GlobalStyles.text}>
          {profile.idade ? `${profile.idade} anos` : 'Não informada'}
        </Text>

        <Text style={GlobalStyles.label}>Instituição</Text>
        <Text style={GlobalStyles.text}>
          {profile.instituicao || 'Não informada'}
        </Text>

        <Text style={GlobalStyles.label}>Curso</Text>
        <Text style={GlobalStyles.text}>
          {profile.curso || 'Não informado'}
        </Text>

        <TouchableOpacity 
          style={GlobalStyles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={GlobalStyles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <EditProfileModal
          profile={profile}
          onSave={handleSaveProfile}
          onCancel={() => setModalVisible(false)}
        />
      </Modal>
    </ScrollView>
  );
}