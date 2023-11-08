import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Model = ({ visible, onClose, onUpdate, name }) => {
  const [newName, setNewName] = useState(name);

  const handleUpdate = () => {
    onUpdate(newName);
    onClose();
  }

  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Update User Data</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newName}
            onChangeText={setNewName}
          />
          
          <View style={styles.buttonContainer}>
            <Button title="Update" onPress={handleUpdate} />
            <Button title="Cancel" onPress={onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent white background
    borderRadius: 10,
    padding: 20,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Model;






     {/* <Model
                visible={isUpdateModalVisible}
                onClose={() => setUpdateModalVisible(false)}
                onUpdate={handleUpdate}
                name={item.title}
            />
            {updatedName && <Text>Updated Name: {updatedName}</Text>} */}
            
              // const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
    // const [userInput, setUserInput] = useState('');
    // const [updatedName, setUpdatedName] = useState('');

    // const toggleModal = () => {
    //     setUpdateModalVisible(true);
    // };

    // const handleUpdate = (newName) => {
    //     setUpdatedName(newName);
    // };
