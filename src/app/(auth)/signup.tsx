import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Activity, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/styles";


export default function SignUpScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { signUp } = useAuth()

    useEffect(() => {
        router.push("/(auth)/onboarding");
    }, []);

    

    const handleSignUp = async () => {
        if(!email || !password){
            Alert.alert("Error, please fill in all fields");
        }

        if(password.length < 8){
            Alert.alert("Password must be at least 8 characters");
        }

        setIsLoading(true);
        try{
            await signUp(email, password);
        } catch (error) {
            Alert.alert("Error, failed to sign up");
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign Up to Get Started</Text>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Email..."
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Password..."
                        placeholderTextColor={"#999"}
                        autoComplete="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={ handleSignUp }>
                        { isLoading ? (
                            <ActivityIndicator size={24} color="#fff"/>
                            ) : (
                                <Text style={styles.buttonText}>Sign Up</Text>
                            )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.push("/(auth)/login")}>
                        <Text style={styles.linkButtonText}>Already have an account? <Text style={styles.linkButtonTextBold}>Sign In</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}