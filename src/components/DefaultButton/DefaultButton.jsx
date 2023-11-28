import { TouchableOpacity, View } from "react-native";
import { style } from "./DefaultButtonStyle";
import { Text } from "react-native";

export function DefaultButton({ buttonText, clickHandler }) {
    return (
        <TouchableOpacity onPress={clickHandler} style={style.defaultInput}>
            <Text style={style.textButton}>{buttonText}</Text>
        </TouchableOpacity>
    )
}