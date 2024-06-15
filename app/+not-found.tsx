import { H1 } from "@/components/ui/typography";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerShown: true }} />
      <View>
        <H1>This screen doesn't exist.</H1>
        <Link href="/" replace>
          Go to home screen!
        </Link>
      </View>
    </>
  );
}
