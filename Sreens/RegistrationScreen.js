import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
  Text,
  Image,
  Pressable,
} from "react-native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (login) => setLogin(login);
  const emailHandler = (email) => setEmail(email);
  const passwordHandler = (password) => setPassword(password);

  const onLogin = () => {
    console.log(login, email, password);
    setLogin("");
    setEmail("");
    setPassword("");
  };
//
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <Image
              source={require("../assets/screenBg.png")}
              style={styles.image}
            />
            <View style={styles.formWrap}>
              <View style={styles.avatar}></View>
              <Text style={styles.title}>Регистрация</Text>

              <View style={styles.inputWrap}>
                <TextInput
                  value={login}
                  onChangeText={loginHandler}
                  placeholder="Логин"
                  placeholderTextColor={"#BDBDBD"}
                  style={styles.input}
                />
                <TextInput
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor={"#BDBDBD"}
                  style={styles.input}
                />
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>
              <Pressable onPress={onLogin} style={styles.button}>
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
              </Pressable>
              <Text style={styles.logInText}>Уже есть аккаунт? Войти</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  },
  formWrap: {
    // backgroundColor: "#FFFFFF",
    // borderRadius: '25 25 0 0',
    // width: "100%",
    // alignItems: 'center',
    // justifyContent: 'flex-end'
    // top: 200,
    // height: 370,
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 450,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 75,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: "-16%",
    left: "38%",
    borderRadius: 16,
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 1.6,
    marginBottom: 20,
  },
  inputWrap: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  input: {
    height: 45,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16,
  },
  logInText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
  },
});
