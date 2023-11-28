import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text } from "react-native";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { style } from "./ResultPageStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

export function ResultPage({ navigation, route }) {
    const { car, user, total, ageResult, yearResult, baseValue } = route.params


    const [checked, setChecked] = useState(false)


    const handleCheck = () => setChecked(prev => !prev)

    const returnPage = () => navigation.goBack()

    return (
        <LinearGradient style={style.mainContainer} colors={['#5374B6', '#B6535300']}>
            <Text style={style.mainTitle}>
                SIMULACAR
            </Text>

            <Text style={style.subTitle}>
                Olá {user}, fizemos um orçamento para seu veiculo {car}.
            </Text>

            <View >
                <View style={style.resultContainerAll}>
                    <ResultComponent checked={checked} result={baseValue} title={"Base"} />
                    <ResultComponent checked={checked} result={ageResult} title={"Por idade"} />
                    <ResultComponent checked={checked} result={yearResult} title={"Por ano"} />
                </View>
                <ResultComponent checked={checked} title={"Total"} result={total} />
            </View>


            <BouncyCheckbox
                size={25}
                fillColor="#5374B6"
                unfillColor="#FFFFFF"
                text="Conversão para dólar"
                textStyle={style.titleResult}
                iconStyle={{ borderColor: "#5374B6" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={handleCheck}
                isChecked={checked}
            />

            <DefaultButton buttonText="Finalizar" />

            <TouchableOpacity onPress={returnPage}>
                <Text style={style.blueBottomText}>Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

function ResultComponent({ title, result, checked }) {

    const resultText = checked ? `$ ${result / 5}` : `R$ ${result}`

    return (
        <View style={style.resultContainer}>
            <Text style={style.titleResult}>{title}</Text>
            <Text style={style.titleResult}>{resultText}</Text>
        </View>
    )
}