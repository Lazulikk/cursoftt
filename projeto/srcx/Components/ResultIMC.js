import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "../Styles/ResultImc";



export default function ResultImc (props) {

    const onShare = async () => {
        const result = await Share.share ({
            message:"Meu imc hoje é:"  +props.resultImc
        })
    }



    return (
         <View style={styles.resultImc}> 
         <View style={styles.sharedButton}>

            { props.resultImc != null ?

            <TouchableOpacity  onPress={onShare} style={styles.sharedContent} > 
                <Text style={styles.sharedTex}> Share </Text>
            </TouchableOpacity >
            : 
            <View/>
             }
         </View>
              <Text style={styles.information}>{props.messageResultImc}</Text>
             <Text style={styles.numberImc}>{props.resultImc}</Text>
        
         </View>
    )
}
