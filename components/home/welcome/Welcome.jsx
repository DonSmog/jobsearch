import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { SIZES, icons } from "../../../constants";

import styles from "./welcome.style";

const jobTypes = ["Full-time", "Part-time", "Internship", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJob, setActiveJob] = useState(jobTypes[0]);

  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJob, item)}
              onPress={() => {
                setActiveJob(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJob, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;