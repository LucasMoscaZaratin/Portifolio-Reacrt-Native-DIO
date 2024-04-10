import React from 'react';
import { View, Image, Text,Pressable, Linking } from 'react-native';
import  lucas  from '../../assets/pictures/lucas.png'
import { styles } from './StyleSkillScreen';

export function SkillScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={lucas} style={styles.image}/>
        <Text style={styles.name}>Minhas Habilidade</Text>
      </View>
      <View style={styles.habilidades}>
        <Text style={styles.texthabilidades}>Python: ⭐⭐⭐</Text>
        <Text style={styles.texthabilidades}>JavaScript: ⭐⭐</Text>
        <Text style={styles.texthabilidades}>Node.js: ⭐⭐</Text>
        <Text style={styles.texthabilidades}>React Native: ⭐⭐</Text>
        <Text style={styles.texthabilidades}>PostgreSQL: ⭐⭐</Text>
      </View>
      <Pressable style={styles.numberLink} onPress={()=> Linking.openURL('tel:+5515988225487')}>
        <Text style={styles.textnumberLink}>Converse comigo</Text>
      </Pressable>
    </View>
  );
}