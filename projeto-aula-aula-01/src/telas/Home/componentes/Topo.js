import React from "react";
import{ Image, View, Text, StyleSheet} from "react-native";
import { carregaTopo } from "./services/carregaDados";

import logo from "../../../assets/logo.png";

class Topo extends React.Comonet {
    state = {
        topo: {
            boasVindas: "",
            legenda: "",
        }
    };
    atualizaTopo(){
        const retorno = carregaTopo ();
        this.setState({topo: retorno});
    }

    coponentDidMount(){
        this.atualizaTopo();
    }
    renderElement(){
        return (
            <View style={estilos.topo}>
                <Image source={logo} style={estilos.imagem}/>
                <Text style={estilos.boasVindas}>{mock.boasVindas}</Text>
                <Text style={estilos.legenda}>{mock.legenda}</Text>
            </View>
        )
    }
}


/*
export default function Topo(){
    return (
        <View style={estilos.topo}>
            <Image source={logo}/>
            <Text style={estilos.boasVindas}> {topo.boasVindas}</Text>
            <Text syle={estilos.legenda}> {topo.legenda}</Text>
        </View>
    );
}
*/

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight16,

    }

})

export default Topo;