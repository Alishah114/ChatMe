import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Logo = ({Top,left}) => {
    const styles = StyleSheet.create({
    
        logoview:{
             marginTop:Top,
             marginLeft:left,
             width:rw(30),
             justifyContent:"space-between",
            flexDirection:'row'
        },
        logotext:{
            fontSize:rf(3),
            fontWeight:'bold',
            color:'white'
        }
    })
    return (
        <View style={styles.logoview}>
            <AntDesign  name='wechat' color={'white'} size={rf(3.5)}/>
            <Text style={styles.logotext}>ChatMe</Text>
        </View>
    );
}



export default Logo;
