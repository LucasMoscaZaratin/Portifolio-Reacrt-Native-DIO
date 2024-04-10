import React from 'react';
import { View, Text, Pressable, Image, Linking } from 'react-native';
import  lucas  from '../../assets/pictures/lucas.png'

import { styles } from './SyleMainScreen';

export function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={lucas} style={styles.image}/>
        <Text style={styles.name}>Lucas Mosca Zaratin</Text>
      </View>
   
        <Pressable style={styles.links} onPress={()=> Linking.openURL('https://www.linkedin.com/in/lucas-mosca-zaratin/')}>
          <Text style={styles.textLinks}>LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.links} onPress={()=> Linking.openURL('https://github.com/LucasMoscaZaratin')}>
          <Text style={styles.textLinks}>GitHub</Text>
        </Pressable>
        <Pressable style={styles.links} onPress={()=> Linking.openURL('mailto:zaratinlucas@gmial.com')}>
          <Text style={styles.textLinks}>Email</Text>
        </Pressable>

    </View>
  );
}