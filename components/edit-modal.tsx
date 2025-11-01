import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { GlobalStyles } from '@/GlobalStyles';

type Profile = {
  nome: string;
  sobrenome: string;
  idade: string;
  instituicao: string;
  curso: string;
};

type EditProfileModalProps = {
  profile: Profile;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
};

export default function EditProfileModal({ profile, onSave, onCancel }: EditProfileModalProps) {
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <View style={GlobalStyles.modalContainer}>
      <View style={GlobalStyles.modalContent}>
        <Text style={GlobalStyles.modalTitle}>Editar Perfil</Text>
        
        <ScrollView>
          <Text style={GlobalStyles.label}>Nome</Text>
          <TextInput
            style={GlobalStyles.input}
            value={formData.nome}
            onChangeText={(text) => handleInputChange('nome', text)}
            placeholder="Digite seu nome"
          />

          <Text style={GlobalStyles.label}>Sobrenome</Text>
          <TextInput
            style={GlobalStyles.input}
            value={formData.sobrenome}
            onChangeText={(text) => handleInputChange('sobrenome', text)}
            placeholder="Digite seu sobrenome"
          />

          <Text style={GlobalStyles.label}>Idade</Text>
          <TextInput
            style={GlobalStyles.input}
            value={formData.idade}
            onChangeText={(text) => handleInputChange('idade', text)}
            placeholder="Digite sua idade"
            keyboardType="numeric"
          />

          <Text style={GlobalStyles.label}>Instituição</Text>
          <TextInput
            style={GlobalStyles.input}
            value={formData.instituicao}
            onChangeText={(text) => handleInputChange('instituicao', text)}
            placeholder="Digite sua instituição"
          />

          <Text style={GlobalStyles.label}>Curso</Text>
          <TextInput
            style={GlobalStyles.input}
            value={formData.curso}
            onChangeText={(text) => handleInputChange('curso', text)}
            placeholder="Digite seu curso"
          />

          <View style={GlobalStyles.buttonRow}>
            <TouchableOpacity 
              style={GlobalStyles.cancelButton}
              onPress={onCancel}
            >
              <Text style={GlobalStyles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={GlobalStyles.saveButton}
              onPress={handleSave}
            >
              <Text style={GlobalStyles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}