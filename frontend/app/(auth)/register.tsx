import { View, Text, TextInput, Pressable } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { router } from "expo-router";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.replace("/(app)/home");
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-white px-6">
            <Text className="text-2xl font-bold mb-4">Register</Text>

            <TextInput
                className="border w-full p-3 rounded mb-3"
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                className="border w-full p-3 rounded mb-3"
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
            />

            <Pressable onPress={handleRegister} className="bg-black w-full p-3 rounded">
                <Text className="text-white text-center">Register</Text>
            </Pressable>
        </View>
    );
}
