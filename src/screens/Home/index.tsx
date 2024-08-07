import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>(
    []
  );
  const [taskName, setTaskName] = useState("");

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.completed).length;

  function handleTaskAdd() {
    if (tasks.some((task) => task.name === taskName)) {
      return Alert.alert(
        "Tarefa existente!",
        "Você já possui essa tarefa cadastrada"
      );
    }

    if (taskName === "") {
      return Alert.alert("Ops!", "Digite um nome para a nova tarefa");
    }
    setTasks((prevState) => [
      ...prevState,
      { name: taskName, completed: false },
    ]);
    setTaskName("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover tarefa", `Você deseja remover a tarefa: ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskToggle(name: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Ionicons name="add-circle-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.taskInfo}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskCreated}>Criadas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{tasksCreated}</Text>
          </View>
        </View>
        <View style={styles.taskContainer}>
          <Text style={styles.taskDone}>Concluídas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{tasksCompleted}</Text>
          </View>
        </View>
      </View>
      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              name={item.name}
              completed={item.completed}
              onRemove={() => handleTaskRemove(item.name)}
              onToggle={() => handleTaskToggle(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.ListEmptyContainer}>
              <Image
                style={styles.iconImage}
                source={require("../../../assets/clipboard.png")}
              />
              <Text style={styles.listEmptyTextTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
