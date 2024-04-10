import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons, Foundation} from '@expo/vector-icons'
import { MainScreen } from '../screens/Main/MainScreen'
import { SkillScreen } from '../screens/Skills/SkillScreen'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomRoutes(){
    return(
        <Navigator>
            <Screen
                name='Home'
                component={MainScreen}
                options={{
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons
                            name = "home"
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
            <Screen
                name='Skills'
                component={SkillScreen}
                options={{
                    tabBarIcon:({color, size}) =>(
                        <Foundation
                            name = "social-skillshare"
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}