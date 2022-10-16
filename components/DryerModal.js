import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";


// super inefficient but made two components lol
function DryerModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
        <Button 
            title="Available Dryers"
            onPress={toggleModal} />

    <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
        <Text>Hello!</Text>

        <Button 
            title="Dryer 1"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                setModalVisible(false);}
            }
        />
        <Button 
            title="Dryer 2"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                setModalVisible(false);}
            }
        />
        <Button 
            title="Dryer 3"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                 setModalVisible(false);}
            }
        />
        <Button 
            title="Dryer 4"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                 setModalVisible(false);}
            }
        />

        <Button title="Go Back" onPress={toggleModal} />
        </View>
    </Modal>
    </View>
  );
}

export default DryerModal;