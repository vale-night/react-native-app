import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./resolvers/routes";
import Header from "./components/Header";

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <Routes />
      </>
  );
}