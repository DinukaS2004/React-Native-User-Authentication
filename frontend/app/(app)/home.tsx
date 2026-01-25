import { View, Text, Pressable } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-xl mb-4">Welcome 🎉</Text>

            <Pressable
                onPress={() => signOut(auth)}
                className="bg-red-500 px-6 py-3 rounded"
            >
                <Text className="text-white">Logout</Text>
            </Pressable>
        </View>
    );
}
