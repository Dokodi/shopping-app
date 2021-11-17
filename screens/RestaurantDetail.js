import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Fried Rice",
    description: "Fried Rice with chicken and salad",
    price: "GHc20.50",
    image:
      "https://www.papayegroup.com/mcadmin/products/grill%20thigh%20rice%20no%20bg_600x325.png",
  },
  {
    title: "Yam Fries",
    description:
      "Yam fries with chicken or koobi",
    price: "GHc19.20",
    image: "https://www.papayegroup.com/mcadmin/products/grill%20chest%20chips%20fix%20no%20bg_600x334.png",
  },
  {
    title: "Burger",
    description:
      "Burger Bread with Cheese, Egg, burger meat, lettuce, onion and tomatoes,",
    price: "GHc23.50",
    image:
      "https://www.papayegroup.com/mcadmin/products/cheese%20egg%20burger%20no%20bg_600x482.png",
  },
  {
    title: "Juice",
    description:
      "Our Juice are in three different flavours, Orange, Pineapple and Tangerine",
    price: "GHc7.50",
    image:
      "https://www.papayegroup.com/mcadmin/products/juice%202017%20no%20bg%20rgb.png",
  },
  {
    title: "Chicken",
    description: "Two pieces of Fried Chicken",
    price: "GHc13.00",
    image:
      "https://www.papayegroup.com/mcadmin/products/2_600x364(1).png",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
