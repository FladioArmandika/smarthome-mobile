import React from 'react'
import Container from './template/Container'
import Card from './template/Card'
import Text from './template/Text'
import Flex from './template/Flex'
import { ProgressBar } from 'react-native-paper'
import { View } from 'react-native'

export default function Room() {
    return (
        <Card>
            <View>
                <Flex horizontal spacebetween>
                    <Text>Kamar 1</Text>
                    <Text><Text secondary paddingRight={10}>Usage</Text>10hr 18min</Text>
                </Flex>
                <View>
                    <Flex horizontal spacebetween marginTop={20}>
                        <ProgressBar progress={1} style={{width:300, height: 10, flex: 1, borderRadius:5}}/>
                        <Text>Max</Text>
                    </Flex>
                    <Flex horizontal spacebetween marginTop={10}>
                        <ProgressBar progress={0.5}  style={{width: 300, height: 10, flex: 1, borderRadius:5}}/>
                        <Text>Today</Text>
                    </Flex>
                    <Flex horizontal spacebetween marginTop={10}>
                        <ProgressBar progress={0.2} style={{width: 300, height: 10, flex:1, borderRadius:5}}/>
                        <Text>Min</Text>
                    </Flex>
                </View>
            </View>
        </Card>
    )
}
