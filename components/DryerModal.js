import React, { useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import AppButton from "./AppButton";


// super inefficient but made two components lol
function DryerModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
        <AppButton 
            title="Available Dryers"
            onPress={toggleModal} />

    <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
        <Text>Hello!</Text>

        <AppButton 
            title="Dryer 1"
            onPress={() => 
                {navigation.navigate('TimerDryer', 'TimerScreenDryer');
                setModalVisible(false);}
            }
        />
        <AppButton 
            title="Dryer 2"
            onPress={() => 
                {navigation.navigate('TimerDryer', 'TimerScreenDryer');
                setModalVisible(false);}
            }
        />
        <AppButton 
            title="Dryer 3"
            onPress={() => 
                {navigation.navigate('TimerDryer', 'TimerScreenDryer');
                setModalVisible(false);}
            }
        />
        <AppButton 
            title="Dryer 4"
            onPress={() => 
                {navigation.navigate('TimerDryer', 'TimerScreenDryer');
                setModalVisible(false);}
            }
        />

        <AppButton title="Go Back" onPress={toggleModal} />
        </View>
    </Modal>
    </View>
  );
}

export default DryerModal;