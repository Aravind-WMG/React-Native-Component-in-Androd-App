/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ActivityIndicator
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
var flag = true;
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    // return fetch("http://www.mocky.io/v2/5b927cec3300004c0020604f")
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState(
    //       {
    //         isLoading: false,
    //         datasource: responseJson
    //       },
    //       function() {}
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.containerLoader]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.priceWrap}>
            <Text style={styles.pdtTitle}>
              {/* {this.state.datasource[0].singlePdtDetail.pdt_name} */}
              Men's Levi's® 501™ Fit Stretch Jeans
            </Text>
            <Text style={styles.salePrice}>
              {/* SALE {this.state.datasource[0].singlePdtDetail.sale_price} */}
              SALE $39.99
            </Text>
            <Text style={styles.regPrice}>
              {/* Reg {this.state.datasource[0].singlePdtDetail.reg_price} */}
              Reg $59.60
            </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  pdtTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10
  },
  salePrice: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
    marginLeft: 10
  },
  regPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    marginLeft: 10
  }
});
