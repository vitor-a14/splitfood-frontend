// Popup component
import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/lara-light-cyan/theme.css";
export default function NewItemForGroupPopUp({ visible, onClose }) {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: 0,
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>

        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Adicionar novo item</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do item"
            placeholderTextColor="gray" 
            value={formData.cpf}
            onChangeText={(value) => handleChange("itemName", value)}
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Text style={styles.modalMessage}>Quantidade:</Text>
          <InputNumber
            value={formData.quantity}
            onValueChange={(e) => handleChange("quantity", e.value)}
            buttonLayout="horizontal"
            step={1}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-danger"
            incrementButtonTemplate={() => <Text style={styles.buttonText}>+</Text>}
            decrementButtonTemplate={() => <Text style={styles.buttonText}>-</Text>}
            mode="decimal"
            showButtons
            min={1}
            max={100}
          />

          <Pressable onPress={onClose} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </Pressable>

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#D3D3D3", // Slightly grey border color
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Increase space between inputs
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: "center",
    marginBottom: 20,
  },
  confirmButton: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    color: 'white',
  },  
  closeButton: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
