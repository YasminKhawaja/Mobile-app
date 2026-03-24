import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

const ProductDetail = () => {
  const route = useRoute();

  const { title, description, longDescription, price, image } =
    route.params || {};

  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Details</Text>

      <Image source={image} style={styles.image} />

      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.price}>${(price * quantity).toFixed(2)}</Text>
      <Text style={styles.description}>{longDescription}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity}</Text>

        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "#000000",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#CFD8EE",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default ProductDetail;
