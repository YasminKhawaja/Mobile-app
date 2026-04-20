import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import RenderHTML from "react-native-render-html";

const BlogDetail = () => {
  const route = useRoute();

  const {
    title = "Blog titel",
    summary = "Korte beschrijving",
    body = "<p>Geen inhoud</p>",
    image = { uri: "https://via.placeholder.com/150" },
  } = route.params || {};

  const { width } = Dimensions.get("window");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      {/* korte tekst */}
      <Text style={styles.description}>{summary}</Text>

      {/* 🔥 HTML content */}
      {body ? (
        <RenderHTML contentWidth={width} source={{ html: body }} />
      ) : (
        <Text>Geen inhoud beschikbaar</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
});

export default BlogDetail;
