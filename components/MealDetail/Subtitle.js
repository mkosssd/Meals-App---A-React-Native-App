import { StyleSheet, Text } from "react-native"

const Subtitle = ({children}) => {
    return <Text style={styles.subTitle}>{children}</Text>
}
export default Subtitle

const styles = StyleSheet.create({
    subTitle: {
        padding: 5,
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
        
      },
    
})