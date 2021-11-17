import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Papaye Restaurant",
    image_url:
      "https://scontent.facc7-1.fna.fbcdn.net/v/t1.6435-9/s960x960/151647654_3835781056482326_336521491799229571_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFeUYrzJLa_SkTPBlPV1sjRJzVaOaSerecnNVo5pJ6t50omUYs48gb4TgXaDyzDLXulrghEODd7jFB1KRnYoerM&_nc_ohc=KOANndglPtUAX86cuv-&_nc_ht=scontent.facc7-1.fna&oh=2abdca451c2baab12adf0726b8e68dd5&oe=61B929C5",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Papa's Pizza",
    image_url:
      "https://ghanainsider.com/wp-content/uploads/2020/03/p2.webp",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Las Palmas Food Centre",
    image_url:
      "https://scontent-lis1-1.xx.fbcdn.net/v/t31.18172-8/s960x960/17493122_1663750977264658_1675274165919108478_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeELdd8LOiN3cSlgaHpl9rSg8KErPVk5NbDwoSs9WTk1sFgiZf0XP-j_KVLdGNRQ2EiffgwYcrynubAvLdFUzY_B&_nc_ohc=nRBlKehvGFkAX9VWpDJ&_nc_ht=scontent-lis1-1.xx&oh=e22f64018a7495f05b86d1e190f91d80&oe=61BB9023",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
