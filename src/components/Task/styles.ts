import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 8,
  },
  taskName: {
    color: "#FFF",
    flex: 1,
    paddingLeft: 12,
    fontWeight: "400",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
    marginLeft: 12,
  },
  checkboxChecked: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
    fontSize: 12,
  },
  taskNameCompleted: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  buttonRemove: {
    marginVertical: 16,
    padding: 8,
    marginRight: 10,
  },
});
