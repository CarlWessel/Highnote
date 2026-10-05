import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    header: {
        marginBottom: 32
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 32,
        color: "#666",
    },
    form: {
        width: "100%",
    },
    onboardingForm: {
        width: "100%",
        alignItems: "center",
    },
    imageContainer: {
        marginBottom: 32,
        position: "relative",
    },
    placeholderImage: {
        width: 120,
        height: 120,
        backgroundColor: "#f5f5f5",
        borderRadius: 60,
        justifyContent: "center",
        position: "relative",
        borderWidth: 2,
        borderColor: "#e0e0e0",
        borderStyle: "dashed",
        alignItems: "center"
    },
    placeholderText: {
        fontSize: 48,
        color: "#999",
    },
    editBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#000",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    editText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    onboardingInput: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        width: "100%",
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
    },
    onboardingButton: {
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    linkButton: {
        marginTop: 24,
        alignItems: "center",
    },
    linkButtonText: {
        color: "#666",
        fontSize: 14,
    },
    linkButtonTextBold: {
        fontWeight: "600",
        color: "#000",
    },
    profileImage:{
        width: 120,
        height: 120,
        backgroundColor: "#f5f5f5",
        borderRadius: 60,
    }
});
