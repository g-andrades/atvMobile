import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text } from "react-native";
import { DefaultInput } from "../../components/Inputs/Inputs";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { style } from "./RegisterSecondPageStyle";
import { useState } from "react";
import { generateSecurity } from "./SecondPageBL";

export function RegisterSecondPage({ navigation, route }) {
    const { user, age } = route.params
    console.log(route.params);

    const [carInfo, setCarInfo] = useState({ car: "", year: "", carValue: "" })

    const returnPage = () => navigation.goBack()
    const nextPage = () => {
        const { car } = carInfo
        const result = generateSecurity(age, carInfo.year, carInfo.carValue)
        navigation.navigate("result", { ...route.params, ...carInfo, ...result })
    }

    return (
        <LinearGradient style={style.mainContainer} colors={['#5374B6', '#B6535300']}>
            <Text style={style.mainTitle}>
                SIMULACAR
            </Text>

            <Text style={style.subTitle}>
                Olá {user}, Agora vamos solicitar os dados do seu veiculo
            </Text>

            <View style={style.inputContainer}>
                <DefaultInput setter={setCarInfo} id="car" name="Qual o seu carro?" />
                <DefaultInput setter={setCarInfo} id="year" name="Qual o ano do seu carro?" />
            </View>

            <DefaultButton clickHandler={nextPage} buttonText="Próximo" />

            <TouchableOpacity onPress={returnPage}>
                <Text style={style.blueBottomText}>Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}