import { View, Text, TextInput, Pressable } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace("/(app)/home");
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-white px-6">
            <Text className="text-2xl font-bold mb-4">Login</Text>

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

            <Pressable onPress={handleLogin} className="bg-black w-full p-3 rounded">
                <Text className="text-white text-center">Login</Text>
            </Pressable>

            <Pressable onPress={() => router.push("/(auth)/register")}>
                <Text className="mt-4 text-blue-600">Create an account</Text>
            </Pressable>
        </View>
    );
}
