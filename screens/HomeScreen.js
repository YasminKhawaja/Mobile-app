import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Switch,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import { Picker } from "@react-native-picker/picker";
import { useMemo } from "react";

const HomeScreen = () => {
  const [sortOption, setSortOption] = useState("price-asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const categoryNames = {
    "699f04f2b3aed1157daf7bc7": "Opbergers",
    "699f13b1fc8879b8262bec79": "Tasjes",
    "699f16325186c9d84cfb6e07": "Koffers",
  };

  //  PRODUCTEN API
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/698c7fe7e8e32548bbc37c57/products",
      {
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("PRODUCTS:", data);
        setProducts(data.items || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Producten laden mislukt");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading producten...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text>{error}</Text>
      </View>
    );
  }

  // BLOGS API
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/699ef930deecdcddb29496d7/items",
      {
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("BLOGS:", data);
        setBlogs(data.items || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const formattedProducts = useMemo(() => {
    return products.map((item) => {
      const product = item.product;
      const sku = item.skus?.[0];

      return {
        id: product.id,
        title: product.fieldData?.name || "",
        description: product.fieldData?.description || "",
        price: sku?.fieldData?.price?.value
          ? sku.fieldData.price.value / 100
          : 0,
        image: {
          uri: sku?.fieldData?.["main-image"]?.url,
        },
        category: categoryNames[product.fieldData?.category?.[0]] || "Onbekend",
      };
    });
  }, [products]);

  const filteredProducts = formattedProducts.filter((p) => {
    const title = p.title?.toLowerCase() || "";
    const category = p.category?.toLowerCase() || "";
    const query = searchQuery.toLowerCase().trim();

    const matchSearch = title.includes(query) || category.includes(query);

    const matchCategory =
      selectedCategory === "" || p.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // loading (voorkomt crash)
  if (products.length === 0) {
    return (
      <View style={styles.loading}>
        <Text>Loading producten...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.H1}>Reisaccessoires</Text>

      {/* Zoekbalk */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder="Waar ben je naar op zoek?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text style={{ marginBottom: 4, paddingLeft: 10 }}>
        Filter op categorie
      </Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          style={styles.picker}
        >
          <Picker.Item label="Alle categorieën" value="" />
          <Picker.Item label="Opbergers" value="Opbergers" />
          <Picker.Item label="Tasjes" value="Tasjes" />
          <Picker.Item label="Koffers" value="Koffers" />
        </Picker>
      </View>

      <Text style={{ marginBottom: 4, paddingLeft: 10 }}>
        Sorteer producten
      </Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={sortOption}
          onValueChange={(value) => setSortOption(value)}
          style={styles.picker}
        >
          <Picker.Item label="Prijs oplopend" value="price-asc" />
          <Picker.Item label="Prijs aflopend" value="price-desc" />
          <Picker.Item label="Naam A-Z" value="name-asc" />
          <Picker.Item label="Naam Z-A" value="name-desc" />
        </Picker>
      </View>

      {/* Favorieten */}
      <View style={styles.switchRow}>
        <Text>Toon favorieten</Text>
        <Switch value={showFavorites} onValueChange={setShowFavorites} />
      </View>

      {/* PRODUCTEN */}
      {filteredProducts.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Geen producten gevonden 😢
        </Text>
      )}

      <View style={styles.grid}>
        {sortedProducts
          .filter((product) =>
            showFavorites ? favorites.includes(product.id) : true,
          )
          .map((product) => (
            <View style={styles.card} key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                showDescription={false}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={(id) => {
                  setFavorites((prev) =>
                    prev.includes(id)
                      ? prev.filter((fav) => fav !== id)
                      : [...prev, id],
                  );
                }}
              />
            </View>
          ))}
      </View>

      {/* BLOGS */}
      <View style={styles.blogSection}>
        <Text style={styles.blogTitle}>Blogs</Text>

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.fieldData?.name}
            summary={blog.fieldData?.["post-summary"]}
            body={blog.fieldData?.["post-body"]}
            image={{
              uri:
                blog.fieldData?.["main-image"]?.url ||
                "https://via.placeholder.com/150",
            }}
          />
        ))}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 12,
  },
  searchBar: {
    backgroundColor: "#eee",
    padding: 8,
    paddingLeft: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  searchBarText: {
    color: "#423d3d",
  },
  H1: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 10,
  },
  blogSection: {
    marginTop: 20,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pickerWrapper: {
    backgroundColor: "#eee",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },

  picker: {
    // height: 40,
  },
});

export default HomeScreen;
