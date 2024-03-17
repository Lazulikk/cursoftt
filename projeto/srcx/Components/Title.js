import React from "react";
import {View, Text} from "react-native";
import TitleStyle from "../Styles/TitleStyle"
import styles from "../Styles/TitleStyle";
export default function Title (){
   return (
    <View style={styles.boxTitle}>
        <Text style={styles.textTitle}> Health (Projeto FTT)</Text>
    </View>
   )
}