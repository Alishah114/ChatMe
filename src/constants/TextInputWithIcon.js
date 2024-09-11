import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from "react-native-responsive-dimensions";

const TextInputWithIcon = ({
  iconname,
  placeholder,
  top,
  left,
  onChangeText, // Corrected prop name
  password,
  value
}) => {
  const [isfocused, setisfocused] = useState(false);
  const [showpassword, setshowpassword] = useState(false);

  const Toggleshowpassword = () => {
    setshowpassword(!showpassword);
  };

  const styles = StyleSheet.create({
    fullview: {
      marginTop: top,
      marginLeft: left,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      margin: rf(1),
      borderRadius: rf(1),
      padding: rf(1),
      borderColor: isfocused ? "#17B169" : "black",
    },
    inputstyle: {
      marginLeft: rw(2),
      width: "100%",
      color: "#17B169",
      fontSize: rf(2),
    },
  });

  return (
    <View style={styles.fullview}>
      <AntDesign
        name={password ? (showpassword ? 'unlock' : 'lock1') : iconname}
        size={24}
        color={isfocused ? "#17B169" : "black"}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.inputstyle}
        onChangeText={onChangeText} // Corrected prop name
        onFocus={() => setisfocused(true)}
        onBlur={() => setisfocused(false)} // Added onBlur to reset focus state
        value={value}
        secureTextEntry={password && !showpassword} // Toggle secureTextEntry based on showpassword
      />
      {password && (
        <TouchableOpacity
          style={{ position: "absolute", right: rw(2) }}
          onPress={Toggleshowpassword}
        >
          <Entypo
            name={showpassword ? "eye" : "eye-with-line"}
            size={rf(3)}
            color={isfocused ? "#17B169" : "black"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputWithIcon;