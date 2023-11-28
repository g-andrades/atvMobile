import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { style } from "./InputsStyle";
import { TextInputMask } from "react-native-masked-text";

export function DefaultInput({ valueProp, id, setter, name, type = "" }) {
    const handleText = (value) => setter(prev => ({ ...prev, [id]: value }))

    return (
        <View style={style.mainInput}>
            <Text style={style.labelInput}>{name}</Text>
            <TextInput value={valueProp[id]} onChangeText={handleText} textContentType={type} style={style.defaultInput} />
        </View>
    )
}

export function MaskInput({ mask, valueProp, id, setter, name, type = "" }) {
    const handleText = (value) => setter(prev => ({ ...prev, [id]: value }))

    return (
        <View style={style.mainInput}>
            <Text style={style.labelInput}>{name}</Text>
            <TextInputMask value={valueProp[id]} type={'custom'} options={{ mask: mask }} onChangeText={handleText} style={style.defaultInput} />
        </View>
    )
}
