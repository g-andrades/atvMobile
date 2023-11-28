import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { style } from "./InputsStyle";

export function DefaultInput({ id, setter, name, type = "" }) {
    const handleText = (value) => setter(prev => ({ ...prev, [id]: value }))

    return (
        <View style={style.mainInput}>
            <Text style={style.labelInput}>{name}</Text>
            <TextInput onChangeText={handleText} textContentType={type} style={style.defaultInput} />
        </View>
    )
}
