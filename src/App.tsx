/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import icons from './components/icons';



function App(): React.JSX.Element {
  const [isCross, setCross]= useState<boolean>(false)
  const [gamewinner,setgamewinner]= useState<string>('')
  const [gameState,setgameState] = useState (new Array(9).fill('empty',0,9))
  const reloadGame = ( )=> {
    setCross(false)
    setgamewinner('')
      setgameState(new Array(9).fill('empty',0,9))
    
  }
  const checkIsWinner = ()=>{
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setgamewinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setgamewinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setgamewinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setgamewinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setgamewinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setgamewinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setgamewinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setgamewinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setgamewinner('Draw game... ⌛️');
    }
  }
  const onChangeItenm = (itemNumber : number)=>{
    if (gamewinner){
      return Snackbar.show({
        text: gamewinner,
        backgroundColor: '#00000',
        textColor: '#FFFFFF'
      })
    }
    if (gameState[itemNumber]==='empty'){
      gameState[itemNumber]= isCross? 'cross':'circle'
      setCross(!isCross)
    }
    else{
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: 'purple',
        textColor: '#FFF'
      })
    }
    checkIsWinner()
  }
  return (
    <SafeAreaView >
    <StatusBar />
    <View>
      <Text>
        tic tac toe
      </Text>
    </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
