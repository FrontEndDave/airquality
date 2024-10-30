import React, { useContext } from "react";
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

import BackIcon from "../../assets/svg/backIcon";
import WeatherContext from "../../context/WeatherContext";

const BottomDrawer = ({ isBottomSheetOpen, handleCloseBottomSheet }) => {};

export default BottomDrawer;
