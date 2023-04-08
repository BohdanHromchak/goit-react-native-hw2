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

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const handleSubmit = () => {
    keyboardHide();
    console.log(state);
    setState(initialState);
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
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
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Логин"
                  placeholderTextColor={"#BDBDBD"}
                  style={{
                    ...styles.input,
                    borderColor: isLoginFocus ? "#ff6c00" : "#e8e8e8",
                    backgroundColor: isLoginFocus ? "#fff" : "#f6f6f6",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsLoginFocus(true)
                  }}
                  onBlur={() => setIsLoginFocus(false)}
                  
                />
                <TextInput
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Адрес электронной почты"
                  placeholderTextColor={"#BDBDBD"}
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocus ? "#ff6c00" : "#e8e8e8",
                    backgroundColor: isEmailFocus ? "#fff" : "#f6f6f6",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsEmailFocus(true)
                  }}
                  onBlur={() => setIsEmailFocus(false)}
                />
                <TextInput
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                  style={{
                    ...styles.input,
                    borderColor: isPasswordFocus ? "#ff6c00" : "#e8e8e8",
                    backgroundColor: isPasswordFocus ? "#fff" : "#f6f6f6",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsPasswordFocus(true)
                  }}
                  onBlur={() => setIsPasswordFocus(false)}
                />
              </View>
              {!isShowKeyboard && (
                <>
                  <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Зарегистрироваться</Text>
                  </Pressable>
                  <Text style={styles.logInText}>Уже есть аккаунт? Войти</Text>
                </>
              )}
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
    backgroundColor: "#FFFFFF",
    // height: 450,
    width: "100%",
    paddingHorizontal: 20,
    // paddingLeft: 16,
    // paddingRight: 16,
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
    fontFamily: "Roboto-Medium",
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
    // backgroundColor: "#F6F6F6",
    // borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },
  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16,
    fontFamily: "Roboto-Regular",
  },
  logInText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    marginBottom: 50,
  },
});
