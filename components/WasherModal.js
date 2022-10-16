import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppButton from "./AppButton";

function WasherModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={ styles.centeredView }>
      <AppButton 
        title="Available Washers"
        onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={ styles.centeredView }>
          <Text>Hello!</Text>
          <AppButton 
            title="Washer 1"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                 setModalVisible(false);}
            }
        />
          <AppButton 
            title="Washer 2"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                setModalVisible(false);}
            }
        />
          <AppButton 
            title="Washer 3"
            onPress={() => 
              {navigation.navigate('Timer', 'TimerScreen');
              setModalVisible(false);}
            }
        />
          <AppButton 
            title="Washer 4"
            onPress={() => 
              {navigation.navigate('Timer', 'TimerScreen');
              setModalVisible(false);}
            }
        />

          <AppButton title="Go Back" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

export default WasherModal;