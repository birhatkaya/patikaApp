import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import card from "../card.json";

const StoreCard = () => {
  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={card}
      renderItem={({ item }) => (
        <View>
          <View style={styles.img_text}>
            <View style={styles.imgView}>
              <Image style={styles.img} source={{ uri: item.imgURL }} />
            </View>
            <Text style={styles.title_text}>{item.title}</Text>
            <Text style={styles.price_style}>{item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: 150,
    height: 200,
    /*    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").height / 5.2,*/
    borderRadius: 5,

    //ekranın daha iyi bir görüntüsü alınabilir mi ?
  },
  flatView: {},
  imgView: {
    alignItems: "center",
    backgroundColor: "yellow",
    margin: 5,
    borderRadius: 5,
    margin: 10,
  },
  upView: {},
  price_style: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#666666",
  },
  img_text: {
    backgroundColor: "#DFDBDB",
    margin: 4,
    marginBottom: 10,
    borderRadius: 4,
  },
  if_text: {
    color: "red",
  },
  title_text: {
    width: 130,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default StoreCard;
