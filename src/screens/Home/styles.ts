import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
  },
  logoContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 110,
    marginTop: 20,
    marginBottom: 20,
  },
  whiteText: {
    color: "#FFF",
    marginTop: 48,
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
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
  form: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 42,
    marginTop: -30,
  },
  taskInfo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  taskContainer: {
    flexDirection: "row",
  },
  taskCreated: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 14,
  },
  taskDone: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 14,
  },
  counterContainer: {
    backgroundColor: "#333333",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    marginBottom: 20,
  },
  counter: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  taskList: {
    paddingHorizontal: 24,
    width: "100%",
  },
  listEmptyTextTitle: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  ListEmptyContainer: {
    alignItems: "center",
    borderTopWidth: 0.25,
    width: "100%",
    borderTopColor: "#333333",
    marginTop: 10,
  },
  iconImage: {
    marginTop: 48,
    marginBottom: 16,
  },
});
