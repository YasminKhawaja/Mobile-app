// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, ScrollView, View } from "react-native";
// import ProductCard from "../components/ProductCard";
// // import { TextInput } from "react-native/types_generated/index";
// import { TextInput } from "react-native";
// import { useState } from "react";
// import { Switch } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   const [showFavorites, setShowFavorites] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   const products = [
//     {
//       id: "1",
//       title: "Toilettas Takkie",
//       price: 4.99,
//       image: require("../images/tasje-takkie.png"),
//     },
//     {
//       id: "2",
//       title: "Nog een product",
//       price: 9.99,
//       image: require("../images/tasje-takkie.png"),
//     },
//   ];

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <Text style={styles.H1}>Reisaccessoires</Text>

//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchBarText}
//           placeholder="Waar ben je naar op zoek?"
//         />
//       </View>

//       <View
//         style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
//       >
//         <Text>Toon favorieten</Text>
//         <Switch value={showFavorites} onValueChange={setShowFavorites} />
//       </View>

//       <View style={styles.grid}>
//         <View style={styles.card}>
//           <ProductCard
//             id="1"
//             title="Toilettas Takkie canvas stof beige"
//             description="Deze handige toilettas is perfect voor kinderen die gaan logeren."
//             price={4.99}
//             image={require("../images/tasje-takkie.png")}
//             onToggleFavorite={(id) => {
//               setFavorites((prev) =>
//                 prev.includes(id)
//                   ? prev.filter((fav) => fav !== id)
//                   : [...prev, id],
//               );
//             }}
//             isFavorite={favorites.includes("1")}
//           />
//         </View>

//         <View style={styles.card}>
//           <ProductCard />
//         </View>

//         <View style={styles.card}>
//           <ProductCard />
//         </View>

//         <View style={styles.card}>
//           <ProductCard />
//         </View>
//       </View>

//       <Switch value={showFavorites} onValueChange={setShowFavorites} />

//       <StatusBar style="auto" />
//     </ScrollView>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   contentContainer: {
// //     alignItems: "center",
// //     padding: 16,
// //   },
// //   grid: {
// //     width: "100%",
// //   },
// //   card: {
// //     width: "100%",
// //   },
// // });

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
//     padding: 4,
//     paddingLeft: 10,
//     borderRadius: 20,
//     marginBottom: 12,
//   },
//   searchBarText: {
//     color: "#423d3d",
//   },
//   H1: {
//     color: "#000000",
//     fontSize: 18,
//     fontWeight: "bold",
//     padding: 8,
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
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";

const HomeScreen = ({ navigation }) => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: "1",
      title: "Toilettas Takkie",
      description: "Handige toilettas voor op reis.",
      longDescription:
        "Deze handige toilettas is perfect voor kinderen die gaan logeren. Gemaakt van stevig canvas, met het leuke dessin van Takkie, biedt deze tas genoeg ruimte voor al je spulletjes. Neem je toilettas gemakkelijk mee in jouw bagage en maak je uitjes zorgeloos! ",
      price: 4.99,
      image: require("../images/tasje-takkie.png"),
    },
    {
      id: "2",
      title: "Opberger 3 stuks",
      description: "Compressie opbergers S+M+L - 3 stuks",
      longDescription:
        "Deze set van 3 opbergers in verschillende maten heeft een strependessin in oranje, blauw en groen. Dankzij de extra rits hebben de opbergers een compressiefunctie. Hierdoor worden de tasjes kleiner en nemen ze minder ruimte in beslag.",
      price: 9.99,
      image: require("../images/opberger.png"),
    },
    {
      id: "3",
      title: "Koffer Nijntje",
      description: "Nijntje koffer ABS 35x20x55 blauw",
      longDescription:
        "Deze kleine lichtblauwe koffer met het gezicht van nijntje is gemaakt van sterk ABS materiaal, heeft een inhoud van 33 liter en weegt zo'n 2.3 kilo. Door het compacte formaat kan de koffer als handbagage mee in de meeste vliegtuigen. De rolkoffer is heel wendbaar en staat op 4 dubbele wielen, die verwisselbaar zijn. Verder heeft de koffer zowel een draaghengsel als een uitschuifbaar trolley handvat om hem te duwen. Als je de koffer openritst zie je een voering met allemaal nijntjes, elastische pakbanden om je bagage goed op z'n plek te houden en aan de andere kant zit een afsluitbaar ritsvak.",
      price: 99.99,
      image: require("../images/koffer.png"),
    },
    {
      id: "4",
      title: "Toilettasjes",
      description: "Set van twee toilettasjes als vrolijke cadeauset.",
      longDescription:
        "Set van twee toilettasjes als vrolijke cadeauset. Het kleine blauwe tasje heeft geborduurde roze hartjes, het grotere tasje een lichtblauw-wit streepje. Beide sluiten met een rits. Handig voor je cosmetica, sieraden of losse spullen in je tas of koffer.",
      price: 6.99,
      image: require("../images/toilettasje1.png"),
    },
  ];

  const blogs = [
    {
      id: "1",
      title: "Duurzaam reizen begint bij je koffer",
      description:
        "Duurzaam reizen gaat niet alleen over vervoer. Het begint bij wat je meeneemt.",
      longDescription:
        "Kleine keuzes maken een groot verschil. Duurzaam reizen begint niet op je bestemming, maar bij wat je meeneemt. Met de juiste accessoires verminder je afval, bespaar je ruimte en reis je bewuster. Waarom duurzame reisaccessoires belangrijk zijn. Duurzame reisaccessoires helpen om afval te verminderen en langer met je spullen te doen. In plaats van goedkope producten die snel kapot gaan, kies je voor kwaliteit die meerdere reizen meegaat. Dat is beter voor het milieu én voordeliger op lange termijn. Kleine keuzes in je koffer maken uiteindelijk een groot verschil.",
      image: require("../images/valies.png"),
    },
    {
      id: "2",
      title: "Waarom goed voorbereid reizen je vakantie beter maakt",
      description:
        "Waarom een goede voorbereiding zorgt voor minder stress en meer reisplezier.",
      longDescription:
        "Een geslaagde reis begint niet op je bestemming, maar thuis. Goede voorbereiding zorgt ervoor dat je minder stress ervaart en meer kunt genieten van het moment. Toch onderschatten veel reizigers hoe belangrijk planning is. Voorbereiding geeft rust. Wanneer je documenten, accommodaties en vervoer op tijd controleert, vertrek je met meer zekerheid. Onzekerheid veroorzaakt stress, en stress haalt plezier weg uit je reis. Een vaste reisroutine. Door een vaste voorbereiding te volgen — checklist maken, spullen klaarleggen, documenten bundelen — bouw je routine op. Dat maakt elke volgende reis eenvoudiger. Minder impulsieve keuzes. Wie goed voorbereid vertrekt, geeft minder geld uit aan last-minute aankopen op luchthavens of toeristische plekken. Conclusie: voorbereiding is geen tijdverlies. Het is een investering in een ontspannen reiservaring.",
      image: require("../images/blog7.jpg"),
    },
  ];

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
        />
      </View>

      {/* Switch */}
      <View style={styles.switchRow}>
        <Text>Toon favorieten</Text>
        <Switch value={showFavorites} onValueChange={setShowFavorites} />
      </View>

      {/* Producten */}
      <View style={styles.grid}>
        {products
          .filter((product) => {
            if (showFavorites) {
              return favorites.includes(product.id);
            }
            return true;
          })
          .map((product) => (
            <View style={styles.card} key={product.id}>
              <ProductCard
                {...product}
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

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              paddingLeft: 10,
            }}
          >
            Blogs
          </Text>

          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </View>
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
});

export default HomeScreen;
