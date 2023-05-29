import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Image
          style={styles.likeBtnImage}
          source={icons.heartOutline}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;