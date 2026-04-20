import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const ProductCard = ({
  id,
  title,
  description,
  price,
  image,
  isFavorite,
  onToggleFavorite,
  showDescription = true, // BELANGRIJK
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      {/* Favoriet */}
      <Pressable style={styles.heart} onPress={() => onToggleFavorite(id)}>
        <Text style={{ fontSize: 18 }}>{isFavorite ? "❤️" : "🤍"}</Text>
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      {/* ALLEEN tonen als showDescription = true */}
      {showDescription && <Text style={styles.description}>{description}</Text>}

      <Text style={styles.price}>${price}</Text>

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
        <Text style={styles.buttonText}>Bekijk product</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#CFD8EE",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default ProductCard;
