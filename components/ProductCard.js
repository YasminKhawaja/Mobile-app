import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Switch,
  TextInput,
} from "react-native";

const ProductCard = ({
  title = "Toilettas Takkie canvas stof beige",
  description = "Deze handige toilettas is perfect voor kinderen die gaan logeren. Gemaakt van stevig canvas, met het leuke dessin van Takkie, biedt deze tas genoeg ruimte voor al je spulletjes. Neem je toilettas gemakkelijk mee in jouw bagage en maak je uitjes zorgeloos!",
  price = 4.99,
  image = require("../images/tasje-takkie.png"),
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description}>${price}</Text>

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter quantity"
        keyboardType="numeric"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Auto-Refill Subscription</Text>
        <Switch value={subscribed} onValueChange={setSubscribed} />
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Details", {
            title,
            description,
            price,
            image,
          })
        }
      >
        <Text style={styles.buttonText}>Look at product</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    marginTop: 4,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  switchLabel: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductCard;
