import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { api } from "../../Constants";
import { Alert } from "react-native";
const UserContext = React.createContext();
export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState(null);
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await axios.get(`${api}/api/v1/users/logout`);
    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
    setPhone(null);
    setUserRole(null);
    setUserId(null);
  };

  const login = (phone, password) => {
    axios
      .post(`${api}/api/v1/users/login`, {
        phone: phone,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        loginUserSuccessful(
          result.data.token,
          result.data.user.email,
          result.data.user.firstName,
          phone,
          result.data.user.role,
          result.data.user._id
        );
      })
      .catch((err) => {
        loginFailed(err.message);

        let message = err.message;
        console.log(err.response.data.error.message);
        if (message === "Request failed with status code 404")
          message = "Утасны дугаар нууц үг хоорондоо таарахгүй байна";
        else if (message === "Network Error")
          message = "Та интернэт холболтоо шалгана уу";
        else {
          message = err.response.data.error.message;
        }
        Alert.alert(message);
      });
  };

  const signUp = (phone, email, password, firstName) => {
    axios
      .post(`${api}/api/v1/users/register`, {
        firstName: firstName,
        phone: phone,
        email: email,
        password: password,
        role: "user",
      })
      .then((result) => {
        loginUserSuccessful(
          result.data.token,
          email,
          phone,
          "user",
          firstName,
          result.data.user._id
        );
      })
      .catch((err) => {
        loginFailed(err.message);

        let message = err.message;
        console.log(err.response.data.error.message);
        if (message === "Request failed with status code 404")
          message = "Утасны дугаар нууц үг хоорондоо таарахгүй байна";
        else if (message === "Network Error")
          message = "Та интернэт холболтоо шалгана уу";
        else if (
          err.response.data.error.message ===
          "Энэ талбарын утгыг давхардуулж өгч болохгүй!"
        ) {
          message = "Утасны дугаар бүртгүүлсэн байна.";
        } else {
          message = err.message;
        }
        Alert.alert(message);
      });
  };

  const loginFailed = (error) => {
    console.log(error);
    setIsLoggedIn(false);
    setEmail(null);
    setPhone(null);
    setUserRole(null);
    setUserId(null);
  };

  const loginUserSuccessful = async (
    token,
    email,
    firstName,
    phone,
    userRole,
    userId
  ) => {
    setToken(token);
    setEmail(email);
    setFirstName(firstName);
    setPhone(phone);
    setUserRole(userRole);
    setUserId(userId);
    setFirstName(firstName);

    setIsLoggedIn(true);
    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ token, phone, email, firstName, userRole, userId })
      );
    } catch (err) {
      console.log("Утас руу хадгалж чадсангүй...");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        login,
        userRole,
        phone,
        email,
        signUp,
        logout,
        isLoading,
        setIsLoading,
        setEmail,
        setPhone,
        setUserRole,
        userId,
        setUserId,
        setFirstName,
        firstName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
