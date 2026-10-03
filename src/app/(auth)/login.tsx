import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/styles";


export default function loginsScreen() {
    const router = useRouter();
    return(
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to Continue</Text>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Email..."
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Password..."
                        placeholderTextColor={"#999"}
                        autoComplete="password"
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.push("/(auth)/signup")}>
                        <Text style={styles.linkButtonText}>Don't have an account? <Text style={styles.linkButtonTextBold}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
