import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text } from "react-native";
import { DefaultInput } from "../../components/Inputs/Inputs";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { style } from "./RegisterFirstPageStyle";
import { useState } from "react";

export function RegisterFirstPage({ navigation, route }) {
    const { user, password } = route.params

    const [age, setAge] = useState({ age: "" })


    const returnPage = () => navigation.goBack()
    const nextPage = () => navigation.navigate("registerSecondPage", { ...route.params, ...age })

    return (
        <LinearGradient style={style.mainContainer} colors={['#5374B6', '#B6535300']}>
            <Text style={style.mainTitle}>
                SIMULACAR
            </Text>

            <Text style={style.subTitle}>
                Olá {user}, vamos realizar uma simulação para um seguro.
            </Text>

            <View style={style.inputContainer}>
                <DefaultInput valueProp={age} setter={setAge} id="age" name="Qual a sua idade?" />
            </View>

            <DefaultButton clickHandler={nextPage} buttonText="Próximo" />

            <TouchableOpacity onPress={returnPage}>
                <Text style={style.blueBottomText}>Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}