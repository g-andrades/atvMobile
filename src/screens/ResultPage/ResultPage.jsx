import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text } from "react-native";
import { DefaultInput } from "../../components/Inputs/Inputs";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { TouchableOpacity } from "react-native";
import { style } from "./ResultPageStyle";

export function ResultPage({ navigation, route }) {
    const { car, user, total, ageResult, yearResult } = route.params

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
                    <ResultComponent result={"1000"} title={"Base"} />
                    <ResultComponent result={ageResult} title={"Por idade"} />
                    <ResultComponent result={yearResult} title={"Por ano"} />
                </View>
                <ResultComponent title={"Total"} result={total} />
            </View>

            <DefaultButton buttonText="Finalizar" />

            <TouchableOpacity onPress={returnPage}>
                <Text style={style.blueBottomText}>Voltar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

function ResultComponent({ title, result }) {
    return (
        <View style={style.resultContainer}>
            <Text style={style.titleResult}>{title}</Text>
            <Text style={style.titleResult}>R$ {result}</Text>
        </View>
    )
}