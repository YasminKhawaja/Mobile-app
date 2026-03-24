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

  const {
    title = "Toilettas Takkie canvas stof beige",
    description = "eze handige toilettas is perfect voor kinderen die gaan logeren. Gemaakt van stevig canvas, met het leuke dessin van Takkie, biedt deze tas genoeg ruimte voor al je spulletjes. Neem je toilettas gemakkelijk mee in jouw bagage en maak je uitjes zorgeloos!",
    price = 4.99,
    image = require("../images/tasje-takkie.png"),
  } = route.params || {};

  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Details</Text>

      <Image source={image} style={styles.image} />

      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.price}>${(price * quantity).toFixed(2)}</Text>
      <Text style={styles.description}>{description}</Text>

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
    width: 300,
    height: 200,
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
    color: "#007AFF",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default ProductDetail;
