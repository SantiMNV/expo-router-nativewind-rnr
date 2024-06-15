import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { H1 } from "@/components/ui/typography";
import { useColorScheme } from "~/lib/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

function LogoTitle() {
  return (
    <View className="flex items-center flex-row gap-2">
      <Image
        className="w-8 h-8"
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text className="text-xl">Home</Text>
    </View>
  );
}

export default function HomeScreen() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // @ts-ignore
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <Button className="mr-4" onPress={() => setCount((c) => c + 1)}>
          <Text>Add count</Text>
        </Button>
      ),
    });
  }, []);

  const toggleColorScheme = () => {
    const updatedColorScheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(updatedColorScheme);
    AsyncStorage.setItem("theme", updatedColorScheme);
  };

  return (
    <View className="flex justify-center items-center h-full">
      <H1>Hi!</H1>
      <Button onPress={toggleColorScheme}>
        <Text>Switch Theme</Text>
      </Button>
      <Text className="text-xl font-bold">Current Theme: {colorScheme}</Text>
      <Text>Count: {count}</Text>
      <Card className="w-full max-w-sm mt-4">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
    </View>
  );
}
