import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 40,
        justifyContent: "space-between"
    },
    mainTitle: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    resultContainerAll: {
        gap: 20,
        marginBottom: 50
    },
    resultContainer: {
        gap: 20,
    },
    blueBottomText: {
        textAlign: "center",
        color: "#5987CC",
        fontWeight: "bold"
    },
    subTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18
    },
    resultContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#D9D9D9",
        paddingVertical: 15
    },
    titleResult: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#1A254E"
    }
})