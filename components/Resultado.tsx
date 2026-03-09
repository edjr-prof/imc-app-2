import { Text, View, StyleSheet } from "react-native"

export function Resultado(props:{resultadoIMC: number}) {
    let color;
    let classificacao;

    if(props.resultadoIMC < 18.5){
        classificacao = "Abaixo do peso";
        color = styles.perigo;
    }else if(props.resultadoIMC < 25){
        classificacao = "Peso normal";
        color = styles.normal;
    }else if(props.resultadoIMC < 30){
        classificacao = "Sobrepeso";
        color = styles.alerta;
    }else{
        classificacao = "Obeso";
        color = styles.perigo;
    }

    return (
        <View style={styles.resultado}>
            <Text style={styles.labelResultado}>Seu IMC:</Text>
            <Text style={styles.imc}>{props.resultadoIMC?.toFixed(2)}</Text>
            <Text style={styles.labelResultado}>Classificação</Text>
            <Text style={[color, styles.classificacao]}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#EEE',
        padding: 20,
        borderRadius: 20
    },
    labelResultado: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10
    },
    imc: {
        backgroundColor: '#FFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        borderRadius: 10,
        marginBottom: 10
    },
    classificacao: {
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        borderRadius: 10,
        marginBottom: 10
    },
    perigo: {
        backgroundColor: '#F00'
    },
    normal: {
        backgroundColor: '#32CD32'
    },
    alerta: {
        backgroundColor: '#FB0'
    }
})