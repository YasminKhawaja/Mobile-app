import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>This is a component</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <ProductCard
            title="Toilettas Takkie canvas stof beige"
            description="Deze handige toilettas is perfect voor kinderen die gaan logeren. Gemaakt van stevig canvas, met het leuke dessin van Takkie, biedt deze tas genoeg ruimte voor al je spulletjes. Neem je toilettas gemakkelijk mee in jouw bagage en maak je uitjes zorgeloos!"
            price={4.99}
            image={require("../images/tasje-takkie.png")}
          />
        </View>

        <View style={styles.card}>
          <ProductCard />
        </View>

        <View style={styles.card}>
          <ProductCard />
        </View>

        <View style={styles.card}>
          <ProductCard />
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    padding: 16,
  },
  grid: {
    width: "100%",
  },
  card: {
    width: "100%",
  },
});

export default HomeScreen;
