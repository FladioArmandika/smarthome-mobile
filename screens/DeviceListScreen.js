import React, { useState } from 'react'
import { View } from 'react-native'
import Text from '../components/template/Text'
import Card from '../components/template/Card'
import { ScrollView, Switch } from 'react-native-gesture-handler'
import Padding from '../components/template/Padding'
import Flex from '../components/template/Flex'
import { IconButton } from 'react-native-paper'
import Colors from '../constants/Colors'

export default function DeviceListScreen() {

    const [isSwitchOn, setIsSwitchOn] = useState(false)

    return (
        <View>
            <ScrollView>
                <Padding all={10}>
                    <Card>
                        <Flex horizontal spacebetween>
                            <Flex spacebetween>
                                <Text>Kamar 1</Text>
                                <Text>{Date.now()}</Text>
                            </Flex>    
                            <Flex horizontal justifyContent='flex-end'>
                                <IconButton
                                    icon='settings'
                                    size={30}
                                    color={Colors.primary}/>
                                <IconButton
                                    icon='microphone'
                                    size={30}
                                    color={Colors.primary}/>
                                <Switch
                                    value={isSwitchOn}
                                    onValueChange={() => setIsSwitchOn(!isSwitchOn)}/>
                            </Flex>
                        </Flex>
                    </Card>
                </Padding>
            </ScrollView>
        </View>
    )
}
