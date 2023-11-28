import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { style } from "./HomeStyle";
import { DefaultInput, } from "../../components/Inputs/Inputs";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { useState } from "react";


export function Home({ navigation, route }) {
    const [values, setValues] = useState({ user: "", password: "" })

    const agePageNavigate = () => navigation.navigate("registerFirstPage", { ...values })

    return (
        <LinearGradient style={style.mainContainer} colors={['#5374B6', '#B6535300']}>
            <Text style={style.mainTitle}>
                SIMULACAR
            </Text>

            <View style={style.inputContainer}>
                <DefaultInput setter={setValues} id="user" name="Usuário" />
                <DefaultInput setter={setValues} id="password" name="Senha" />
            </View>

            <DefaultButton clickHandler={agePageNavigate} buttonText="Logar" />

            <TouchableOpacity>
                <Text style={style.blueBottomText}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}