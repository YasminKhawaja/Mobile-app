import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, Image } from "react-native";

const ProductDetail = ({ route }) => {
    const { title, description, price, image } = route.params;

    const [ quantity, setQuantity ] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
        const decreaseQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };

    return {
        <ScrollView style=(style.container)>

        </ScrollView>

        <View style={styles.quantityContainer}>
            <TouchableOpacity style=(styles.button) onPress(decreaseQuantity)>
            <Text style=(styles.buttonText)>-</Text>
            </TouchableOpacity>

        <Text style=(style.quantityText)>(quantity)</Text>

        <TouchableOpacity style=(styles.button) onPress(increaseQuantity)>
            <Text style=(styles.buttonText)>+</Text>
        
        </View>

        <Text style=(styles.totalPrice)>Total: €{price * quantity}</Text>
        </View>
    }
};

export default ProductDetail;
