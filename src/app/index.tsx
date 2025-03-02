import { Text, View } from "react-native";
import Age from "../components/Age";
import Name from "../components/Name";
import XHandle from "../components/XHandle";
import Love from "../components/Love";


function Index(){
    return <View>
        <Name/>
        <Age/>
        <XHandle/>
        <Love/>
    </View>
}


export  default Index;