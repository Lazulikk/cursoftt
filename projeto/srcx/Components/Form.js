import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native"
import ResultIMC from "./ResultIMC"
import styles from "../Styles/ResultStyle"

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator(){
        return  setImc ((weight / (height * height)).toFixed(2))
    }

    function verificationImc() {
        if(imc == null) {
            Vibration.vibrate();
            setErrorMessage ("Campo obrigatório")
        }
    }
    

    function validationImc(){
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }


        verificationImc()
        setImc(null);
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return (
        <View style={styles.formContent}>
            <View style={styles.form}> 
                <Text style={styles.formLavel}>  Altura</Text>  
                    <TextInput style={styles.input}  onChangeText={setHeight} value={height}  placeholder="Ex: 1.75" keyboardType="numeric"/>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLavel}> Peso</Text>
                    <TextInput style={styles.input} onChangeText={setWeight} value={weight}   keyboardType="numeric" placeholder="75"/>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity style={styles.Calculator}  onPress={() => {validationImc()} }>
<Text style={styles.textCalculator}> {textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc} />
            
        </View>

    )
}