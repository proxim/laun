import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function WasherModal({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button 
        title="Available Washers"
        onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button 
            title="Washer 1"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                 setModalVisible(false);}
            }
        />
          <Button 
            title="Washer 2"
            onPress={() => 
                {navigation.navigate('Timer', 'TimerScreen');
                setModalVisible(false);}
            }
        />
          <Button 
            title="Washer 3"
            onPress={() => 
              {navigation.navigate('Timer', 'TimerScreen');
              setModalVisible(false);}
            }
        />
          <Button 
            title="Washer 4"
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

export default WasherModal;