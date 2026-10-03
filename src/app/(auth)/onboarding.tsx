import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Activity, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/styles";


export default function SignUpScreen() {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleComplete = () => {

    }

    return(
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Complete Your Profile</Text>
                    <Text style={styles.subtitle}>Add your information to get started</Text>
                </View>

                <View style={styles.onboardingForm}>
                    <TouchableOpacity style={styles.imageContainer}>
                        <View style={styles.placeholderImage}>
                            <Text style = {styles.placeholderText}>+</Text>
                        </View>
                        <View style={styles.editBadge}>
                            <Text style = {styles.editText}>Edit</Text>  
                        </View>
                    </TouchableOpacity>

                    <TextInput
                        style = {styles.onboardingInput}
                        placeholder = "Full Name"
                        placeholderTextColor = "#999"
                        value = {name}
                        onChangeText = {setName}
                        autoCapitalize = "words"
                    />

                    <TextInput
                        style = {styles.onboardingInput}
                        placeholder = "Username"
                        placeholderTextColor = "#999"
                        value = {userName}
                        onChangeText = {setUserName}
                        autoCapitalize = "none"
                        autoComplete = "username"
                    />

                    <TouchableOpacity style={styles.onboardingButton} onPress={ handleComplete }>
                        { isLoading ? (
                            <ActivityIndicator size={24} color="#fff"/>
                            ) : (
                                <Text style={styles.buttonText}>Complete Setup</Text>
                            )}
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
}

