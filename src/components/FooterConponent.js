import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RBSheet from 'react-native-raw-bottom-sheet';

const FooterComponent = () => {
  const refRBSheet = useRef();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
     
     <TouchableOpacity style={styles.button} onPress={() => refRBSheet.current.open()}>
        <Text style={styles.buttonText}>Update</Text>
        <FontAwesome6 name="basket-shopping" size={30} color="black" />
        <Text style={styles.priceText}>10$</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          }
        }}
      >
        
       
          <View style={styles.updateQuantity}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <FontAwesome6 name="minus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <FontAwesome6 name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
          
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 10,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    height: 100
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  modalView: {
    width: "100%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  updateQuantity: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityButton: {
    marginHorizontal: 20,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FooterComponent;
