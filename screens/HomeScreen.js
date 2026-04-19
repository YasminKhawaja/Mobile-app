// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   View,
//   TextInput,
//   Switch,
// } from "react-native";
// import { useState } from "react";
// import ProductCard from "../components/ProductCard";
// import BlogCard from "../components/BlogCard";

// const HomeScreen = ({ navigation }) => {
//   const [showFavorites, setShowFavorites] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   const products = [
//     {
//       id: "1",
//       title: "Toilettas Takkie",
//       description: "Handige toilettas voor op reis.",
//       longDescription:
//         "Deze handige toilettas is perfect voor kinderen die gaan logeren. Gemaakt van stevig canvas, met het leuke dessin van Takkie, biedt deze tas genoeg ruimte voor al je spulletjes. Neem je toilettas gemakkelijk mee in jouw bagage en maak je uitjes zorgeloos! ",
//       price: 4.99,
//       image: require("../images/tasje-takkie.png"),
//     },
//     {
//       id: "2",
//       title: "Opberger 3 stuks",
//       description: "Compressie opbergers S+M+L - 3 stuks",
//       longDescription:
//         "Deze set van 3 opbergers in verschillende maten heeft een strependessin in oranje, blauw en groen. Dankzij de extra rits hebben de opbergers een compressiefunctie. Hierdoor worden de tasjes kleiner en nemen ze minder ruimte in beslag.",
//       price: 9.99,
//       image: require("../images/opberger.png"),
//     },
//     {
//       id: "3",
//       title: "Koffer Nijntje",
//       description: "Nijntje koffer ABS 35x20x55 blauw",
//       longDescription:
//         "Deze kleine lichtblauwe koffer met het gezicht van nijntje is gemaakt van sterk ABS materiaal, heeft een inhoud van 33 liter en weegt zo'n 2.3 kilo. Door het compacte formaat kan de koffer als handbagage mee in de meeste vliegtuigen. De rolkoffer is heel wendbaar en staat op 4 dubbele wielen, die verwisselbaar zijn. Verder heeft de koffer zowel een draaghengsel als een uitschuifbaar trolley handvat om hem te duwen. Als je de koffer openritst zie je een voering met allemaal nijntjes, elastische pakbanden om je bagage goed op z'n plek te houden en aan de andere kant zit een afsluitbaar ritsvak.",
//       price: 99.99,
//       image: require("../images/koffer.png"),
//     },
//     {
//       id: "4",
//       title: "Toilettasjes",
//       description: "Set van twee toilettasjes als vrolijke cadeauset.",
//       longDescription:
//         "Set van twee toilettasjes als vrolijke cadeauset. Het kleine blauwe tasje heeft geborduurde roze hartjes, het grotere tasje een lichtblauw-wit streepje. Beide sluiten met een rits. Handig voor je cosmetica, sieraden of losse spullen in je tas of koffer.",
//       price: 6.99,
//       image: require("../images/toilettasje1.png"),
//     },
//   ];

//   const blogs = [
//     {
//       id: "1",
//       title: "Duurzaam reizen begint bij je koffer",
//       description:
//         "Duurzaam reizen gaat niet alleen over vervoer. Het begint bij wat je meeneemt.",
//       longDescription:
//         "Kleine keuzes maken een groot verschil. Duurzaam reizen begint niet op je bestemming, maar bij wat je meeneemt. Met de juiste accessoires verminder je afval, bespaar je ruimte en reis je bewuster. Waarom duurzame reisaccessoires belangrijk zijn. Duurzame reisaccessoires helpen om afval te verminderen en langer met je spullen te doen. In plaats van goedkope producten die snel kapot gaan, kies je voor kwaliteit die meerdere reizen meegaat. Dat is beter voor het milieu én voordeliger op lange termijn. Kleine keuzes in je koffer maken uiteindelijk een groot verschil.",
//       image: require("../images/valies.png"),
//     },
//     {
//       id: "2",
//       title: "Waarom goed voorbereid reizen je vakantie beter maakt",
//       description:
//         "Waarom een goede voorbereiding zorgt voor minder stress en meer reisplezier.",
//       longDescription:
//         "Een geslaagde reis begint niet op je bestemming, maar thuis. Goede voorbereiding zorgt ervoor dat je minder stress ervaart en meer kunt genieten van het moment. Toch onderschatten veel reizigers hoe belangrijk planning is. Voorbereiding geeft rust. Wanneer je documenten, accommodaties en vervoer op tijd controleert, vertrek je met meer zekerheid. Onzekerheid veroorzaakt stress, en stress haalt plezier weg uit je reis. Een vaste reisroutine. Door een vaste voorbereiding te volgen — checklist maken, spullen klaarleggen, documenten bundelen — bouw je routine op. Dat maakt elke volgende reis eenvoudiger. Minder impulsieve keuzes. Wie goed voorbereid vertrekt, geeft minder geld uit aan last-minute aankopen op luchthavens of toeristische plekken. Conclusie: voorbereiding is geen tijdverlies. Het is een investering in een ontspannen reiservaring.",
//       image: require("../images/blog7.jpg"),
//     },
//   ];

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <Text style={styles.H1}>Reisaccessoires</Text>

//       {/* Zoekbalk */}
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchBarText}
//           placeholder="Waar ben je naar op zoek?"
//         />
//       </View>

//       {/* Switch */}
//       <View style={styles.switchRow}>
//         <Text>Toon favorieten</Text>
//         <Switch value={showFavorites} onValueChange={setShowFavorites} />
//       </View>

//       {/* Producten */}
//       <View style={styles.grid}>
//         {products
//           .filter((product) => {
//             if (showFavorites) {
//               return favorites.includes(product.id);
//             }
//             return true;
//           })
//           .map((product) => (
//             <View style={styles.card} key={product.id}>
//               <ProductCard
//                 {...product}
//                 isFavorite={favorites.includes(product.id)}
//                 onToggleFavorite={(id) => {
//                   setFavorites((prev) =>
//                     prev.includes(id)
//                       ? prev.filter((fav) => fav !== id)
//                       : [...prev, id],
//                   );
//                 }}
//               />
//             </View>
//           ))}

//         <View style={{ marginTop: 20 }}>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "bold",
//               marginBottom: 10,
//               paddingLeft: 10,
//             }}
//           >
//             Blogs
//           </Text>

//           {blogs.map((blog) => (
//             <BlogCard key={blog.id} {...blog} />
//           ))}
//         </View>
//       </View>

//       <StatusBar style="auto" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   contentContainer: {
//     padding: 10,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     width: "48%",
//     marginBottom: 12,
//   },
//   searchBar: {
//     backgroundColor: "#eee",
//     padding: 8,
//     paddingLeft: 12,
//     borderRadius: 20,
//     marginBottom: 12,
//   },
//   searchBarText: {
//     color: "#423d3d",
//   },
//   H1: {
//     fontSize: 18,
//     fontWeight: "bold",
//     padding: 8,
//   },
//   switchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
// });

// export default HomeScreen;

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";

const HomeScreen = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // 🔥 PRODUCTEN API
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/698c7fe7e8e32548bbc37c57/products",
      {
        headers: {
          Authorization:
            "Bearer 7da7e50785c2443b9c7dabfd811b032cfee745714bdfdb7ca9afb66592ebbe90",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("PRODUCTS:", data);
        setProducts(data.items || []);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔥 BLOGS API
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/699ef930deecdcddb29496d7/items",
      {
        headers: {
          Authorization:
            "Bearer 7da7e50785c2443b9c7dabfd811b032cfee745714bdfdb7ca9afb66592ebbe90",
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

  // 🔥 loading (voorkomt crash)
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

      {/* 🔍 Zoekbalk */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder="Waar ben je naar op zoek?"
        />
      </View>

      {/* ❤️ Favorieten */}
      <View style={styles.switchRow}>
        <Text>Toon favorieten</Text>
        <Switch value={showFavorites} onValueChange={setShowFavorites} />
      </View>

      {/* 🛒 PRODUCTEN */}
      <View style={styles.grid}>
        {products
          .filter((product) =>
            showFavorites ? favorites.includes(product.product.id) : true,
          )
          .map((product) => (
            <View style={styles.card} key={product.product.id}>
              <ProductCard
                id={product.product.id}
                title={product.product.fieldData?.name}
                description={product.product.fieldData?.description}
                longDescription={product.product.fieldData?.description}
                price={
                  product.skus?.[0]?.fieldData?.price?.value
                    ? (product.skus[0].fieldData.price.value / 100).toFixed(2)
                    : "0.00"
                }
                image={{
                  uri:
                    product.skus?.[0]?.fieldData?.["main-image"]?.url ||
                    "https://via.placeholder.com/150",
                }}
                showDescription={false} // 👈 HIER gebeurt jouw fix
                isFavorite={favorites.includes(product.product.id)}
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

      {/* 📰 BLOGS */}
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
});

export default HomeScreen;
