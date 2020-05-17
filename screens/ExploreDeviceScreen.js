import React from 'react'
import { View } from 'react-native'
import Text from '../components/template/Text'
import { ScrollView } from 'react-native-gesture-handler'
import Padding from '../components/template/Padding'
import Card from '../components/template/Card'
import Flex from '../components/template/Flex'
import { IconButton } from 'react-native-paper'
import Colors from '../constants/Colors'

export default function ExploreDeviceScreen() {
    return (
        <View>
            <ScrollView>
                <Padding all={10}>
                    <Card>
                        <Flex horizontal>
                            <Flex spacebetween>
                                <Text>SMART SOCKET</Text>
                                <Text>{Date.now()}</Text>
                            </Flex>
                            <Flex horizontal justifyContent='flex-end'>
                                <IconButton
                                    icon='settings'
                                    size={30}
                                    color={Colors.primary}/>
                            </Flex>
                        </Flex>
                    </Card>
                </Padding>
            </ScrollView>
        </View>
    )
}
