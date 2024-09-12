import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from "react-native-responsive-dimensions";
import Logo from "../constants/logo";
import TextInputWithIcon from "../constants/TextInputWithIcon";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = useState("");
  const [mailexist, setmailexist] = React.useState("exist");
  const [emailexistLoading, setemailexitLoading] = React.useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    setmailexist(text.length > 5 ? "exist" : "not exist");
  };

  const ResetButton = () => {
    setEmail("");
    setpassword("");
  };

  return (
    <View style={styles.background}>
      <Logo Top={rh(15)} left={rw(35)} />

      <View style={styles.loginView}>
        <Text style={styles.welcombacktext}>Welcome Back</Text>
        <TextInputWithIcon
          // password={true}
          iconname={"mail"}
          top={rh(5)}
          placeholder={"Example@gmail.com"}
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInputWithIcon
          // password={true}
          password={true}
          top={rh(5)}
          placeholder={"Password"}
          onChangeText={setpassword}
          value={password}
        />

        <View style={styles.buttonsview}>
          <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.loginbuttontext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetbutton} onPress={ResetButton}>
            <Text style={styles.resetbuttontext}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomview}>
        <Text style={styles.bottomtext}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('RegistrationScreen')}>
          <Text style={styles.bottomtextsignup}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    minHeight: rh(110),
    backgroundColor: "#17B169",
  },
  welcombacktext: {
    fontSize: rf(3.5),
    fontWeight: "bold",
    color: "#17B169",
    alignSelf: "center",
  },
  loginView: {
    backgroundColor: "white",
    height: rh(50),
    width: rw(90),
    alignSelf: "center",
    marginTop: rh(10),
    borderRadius: rf(2),
    elevation: 5,
    padding: rf(2),
  },
  emailStatus: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: rh(2),
    // alignSelf: 'center',
    marginLeft: rw(2),
  },
  emailnotExistText: {
    fontSize: rf(2),
    color: "green",
    marginLeft: rw(2),
  },
  emailExistText: {
    fontSize: rf(2),
    color: "red",
    marginLeft: rw(2),
  },
  emailStatusfetchingtext: {
    fontSize: rf(2),
    color: "#17B169",
    marginLeft: rf(1),
  },
  buttonsview: {
    flexDirection: "row",
    // alignSelf:'flex-end',
    // alignItems:'flex-end',
    marginTop: rf(6),
    margin: rf(2),
    justifyContent: "space-between",
  },
  loginbutton: {
    width: rw(30),
    backgroundColor: "#17B169",
    padding: rf(1),
    borderRadius: rf(1),
  },
  loginbuttontext: {
    textAlign: "center",
    color: "white",
    fontSize: rf(2.4),
    fontWeight: "bold",
  },
  resetbutton: {
    width: rw(30),
    backgroundColor: "#17B169",
    padding: rf(1),
    borderRadius: rf(1),
  },
  resetbuttontext: {
    textAlign: "center",
    color: "white",
    fontSize: rf(2.4),
    fontWeight: "bold",
  },
    bottomview: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: rf(7),
    },
    bottomtext: {
        fontSize: rf(2.5),
        color: "white",
    },
    bottomtextsignup: {
        fontSize: rf(2.5),
        color: "white",
        marginLeft: rw(1),
        textDecorationLine: "underline",
    },
});

export default LoginScreen;

{
  /* {
                    emailexistLoading ? (
                        <View style={styles.emailStatus}>
                           <ActivityIndicator size={rf(2.5)} color={'#17B169'} />
                           <Text style={styles.emailStatusfetchingtext}>Email Status Fetching</Text>
                        </View>
                    ) : 
                
            
                mailexist ? (
                    mailexist === 'exist' ? (
                        <View style={styles.emailStatus}>
                            <FontAwesome name="times" size={rf(2.5)} color="red" />
                            <Text style={styles.emailExistText}>Email Already exists</Text>
                        </View>
                    ) : (
                        <View style={styles.emailStatus}>
                            <FontAwesome name="check" size={rf(2.5)} color="green" />
                            <Text style={styles.emailnotExistText}> Email does not exist</Text>
                        </View>
                    )
                ) : null} */
}
