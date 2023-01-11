import { View, Text, Button, StyleSheet } from "react-native"

Dashboard = ({navigation}) =>{

    
    return(
        <View style={styles.container_box}>
            <View style={styles.tombol}>
            <Button 
                color= '#004953'
                title="Maps" 
                onPress={() => navigation.navigate('Peta')}/>   
                </View>         
        <View style={styles.tombol}>
        <Button 
            color= '#004953'
            title="Counterbutton" 
            onPress={() => navigation.navigate('Praktikum3')}/> 
            </View>
    <View style={styles.tombol}>
    <Button 
        color= '#004953'
        title="Box, Flex, Style" 
        onPress={() => navigation.navigate('Praktikum4')} />
    </View>
    <View style={styles.tombol}>
        <Button 
        color= '#004953'
        title="List Peta" 
        onPress={() => navigation.navigate('Listpeta')} />
       </View>   
    </View>
    );
}

const styles = StyleSheet.create({
    container_box: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        marginBottom: 20,
        backgroundColor: '#fff'
    },    
    tombol: {
        paddingBottom: 15,
    }
})
export default Dashboard;