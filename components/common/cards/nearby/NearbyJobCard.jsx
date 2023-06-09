import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job?.employer_logo
              ? job?.employer_logo
              : "https://via.placeholder.com/150",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
