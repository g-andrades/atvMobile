import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text } from "react-native";
import { DefaultInput, MaskInput } from "../../components/Inputs/Inputs";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { style } from "./RegisterSecondPageStyle";
import { useState } from "react";
import { generateSecurity } from "./SecondPageBL";
import { KeyboardAvoidingView } from "react-native";

export function RegisterSecondPage({ navigation, route }) {
    const { user, age } = route.params
    console.log(route.params);

    const [carInfo, setCarInfo] = useState({ car: "", year: "", carValue: "", plate: "" })

    const returnPage = () => navigation.goBack()
    const nextPage = () => {
        const { year, carValue } = carInfo
        const result = generateSecurity(age, year, carValue)
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

            <KeyboardAvoidingView behavior="position" >
                <View style={style.inputContainer}>
                    <DefaultInput valueProp={carInfo} setter={setCarInfo} id="car" name="Qual o seu carro?" />
                    <DefaultInput valueProp={carInfo} setter={setCarInfo} id="carValue" name="Qual o valor do seu carro?" />
                    <DefaultInput valueProp={carInfo} setter={setCarInfo} id="year" name="Qual o ano do seu carro?" />
                    <MaskInput valueProp={carInfo} setter={setCarInfo} mask={'AAA-9A99'} id="plate" name="plate" />
                </View>
            </KeyboardAvoidingView>

            <DefaultButton clickHandler={nextPage} buttonText="Próximo" />

            <TouchableOpacity onPress={returnPage}>
                <Text style={style.blueBottomText}>Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}