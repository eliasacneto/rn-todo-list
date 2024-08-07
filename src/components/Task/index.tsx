import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: string;
  completed: boolean;
  onRemove: () => void;
  onToggle: () => void;
};

export function Task({ name, completed, onRemove, onToggle }: Props) {
  //   const [checked, setChecked] = useState(false);

  function handleR() {
    console.log("Removed");
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkboxBase, completed && styles.checkboxChecked]}
        onPress={onToggle}
      >
        {completed && <Ionicons name="checkmark" size={14} color="white" />}
      </Pressable>
      <Text style={[styles.taskName, completed && styles.taskNameCompleted]}>
        {name}
      </Text>

      <Ionicons
        name="trash-outline"
        style={styles.buttonRemove}
        size={20}
        color="gray"
        onPress={onRemove}
      />
    </View>
  );
}
