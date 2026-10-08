import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/styles";
import * as ImagePicker from "expo-image-picker"
import { supabase } from "@/lib/supabase/client";
import { uploadProfileImage } from "@/lib/supabase/storage";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function SignUpScreen() {

    const [name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const { user, updateUser } = useAuth();
    const router = useRouter()

    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission needed",
                "We need cameraroll permissions to select a profile image.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.8,
        })
        if(!result.canceled && result.assets[0]) {
            setProfileImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission needed",
                "We need camera permissions to take a photo.");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.8,
        })
        if(!result.canceled && result.assets[0]) {
            setProfileImage(result.assets[0].uri);
        }
    };

    const showImagePicker = () => {
        Alert.alert("Select Profile Image", "Choose an option", [
            {text: "Camera", onPress: takePhoto},
            {text: "Photo Library", onPress: pickImage},
            {text: "Cancel", style: "cancel"},
        ]);
    };

    const handleComplete = async () => {
        if(!name || !userName){
            Alert.alert("Error, please fill in all fields");
        }

        if(userName.length < 6){
            Alert.alert("Username must be at least 6 characters");
        }

        setIsLoading(true);

        try{
            if (!user) {
                throw new Error("User not authenticated");
            }

            //check if username exists
            const {data: existingUser} = await supabase
                .from("profiles")
                .select("id")
                .eq("username", userName)
                .neq("id", user.id)
                .single();

            if(existingUser) {
                Alert.alert(
                    "Error",
                    "This username is already taken, please choose another one."
                );
                setIsLoading(false);
                return;
            }

            // upload profile image
            let profileImageUrl: string | undefined;
            if (profileImage) {
                try {
                    profileImageUrl = await uploadProfileImage(user.id, profileImage)
                } catch (error) {
                    console.error("Error uploading profile image:", error);
                    Alert.alert(
                        "Warning",
                        "Failed to upload profile image, continuing without image.",
                    );
                }
            }

            // Update profile
            await updateUser({
                name,
                username: userName,
                profileImage: profileImageUrl,
                onboardingCompleted: true,
            });

            router.replace("/(tabs)");

        } catch (error) {
            Alert.alert("Error, failed to complete profile. Please try again");
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Complete Your Profile</Text>
                    <Text style={styles.subtitle}>Add your information to get started</Text>
                </View>

                <View style={styles.onboardingForm}>
                    <TouchableOpacity style={styles.imageContainer} onPress={showImagePicker}>
                        {profileImage ? (
                            <Image
                                source={{ uri: profileImage }} style={styles.profileImage}
                            />
                        ) : (
                            <View style={styles.placeholderImage}>
                                <Text style = {styles.placeholderText}>+</Text>
                            </View>
                        )}
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
                        onChangeText = {setUsername}
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
