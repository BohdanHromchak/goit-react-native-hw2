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
  ImageBackground,
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={require("../assets/screenBg.png")}
            style={styles.image}
          >
              <View style={styles.formWrap}>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              value={login}
              onChangeText={loginHandler}
              placeholder="Логин"
              style={styles.input}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Адрес электронной почты"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
            />
            <Button
              title={"Зарегистрироваться"}
              style={styles.input}
              onPress={onLogin}
            />
             </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flex: 1,
    // flexDirection: "row",
    // height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: "cover",

    // flexDirection: 'row',
    // height: '100%',
    // flex: 1,
    // position: absolute,
    // position: 'absolute',
    // width: 375,
    // height: '100%',
    // height: "100%",
    // width: "100%",
  },
});
