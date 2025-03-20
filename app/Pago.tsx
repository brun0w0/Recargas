import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Pago() {
    const { nombre, telefono, plan, precio, compañia, capacidad, duracion } = useLocalSearchParams();
    const router = useRouter();

    const tarjetas = [
        { red: 'Visa', terminacion: '1276', nombre: 'Bruno Llovera', vencimiento: '04/2028', estilo: styles.Visa },
        { red: 'Visa', terminacion: '4477', nombre: 'Bruno Llovera', vencimiento: '01/2030', estilo: styles.Visa },
        { red: 'Mastercard', terminacion: '1007', nombre: 'Bruno Llovera', vencimiento: '07/2029', estilo: styles.Mastercard },
        { red: 'Mastercard', terminacion: '1733', nombre: 'Bruno Llovera', vencimiento: '06/2028', estilo: styles.Mastercard },
        { red: 'Visa', terminacion: '8899', nombre: 'Bruno Llovera', vencimiento: '11/2030', estilo: styles.Visa }
    ]
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.grid}>
                    <Text style={styles.gridText}>Datos de pago</Text>
                </View>
                <View style={styles.datos}>
                    <Text style={styles.textDatosTitle}>{nombre}</Text>
                    <Text style={styles.textDatos}>{telefono}</Text>
                </View>
                <View style={styles.datos}>
                    <Text style={styles.textDatosTitle}>{plan}</Text>
                </View>
                <View style={styles.datos}>
                    <Text style={styles.textDatosTitle}>Total</Text>
                    <Text style={styles.textDatos}>${precio} MXN</Text>
                </View>
                <Text style={styles.text1}>Elige una tarjeta de pago</Text>

                {tarjetas.map((tarjeta, index) => (
                    <TouchableOpacity key={index} style={[styles.tarjetas, tarjeta.estilo]} onPress={() => router.push(`/Listo?nombre=${nombre}&telefono=${telefono}&plan=${plan}&red=${tarjeta.red}&terminacion=${tarjeta.terminacion}&precio=${precio}&compañia=${compañia}&capacidad=${capacidad}&duracion=${duracion}`)}>
                        <Text style={styles.textRed}>{tarjeta.red} que termina en <Text style={styles.textRed2}>{tarjeta.terminacion}</Text></Text>
                        <Text style={styles.textNombre}>{tarjeta.nombre}</Text>
                        <Text style={styles.textVencimiento}>Vence el {tarjeta.vencimiento}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1029",
        padding: 10,
    },
    grid: {
        backgroundColor: '#c00079',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: '95%',
    },
    gridText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    datos: {
        backgroundColor: '#c00079',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        width: '95%',
        borderWidth: 1,
        borderColor: '#ff1',
    },
    textDatosTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#ff1',
    },
    textDatos: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'left',
        color: '#fff',
    },
    textPlanNombre: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    text1: {
        color: '#fff',
        fontSize: 25,
        margin: 10,
    },
    tarjetas: {
        margin: 10,
        width: '97%',
        padding: 10,
        borderRadius: 10,
        borderBottomRightRadius: 80
    },
    textRed: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '100',
    },
    textRed2: {
        fontWeight: '900',
        color: '#fff'
    },
    textNombre: {
        fontSize: 18,
        color: '#fbfbfb'
    },
    textVencimiento: {
        fontSize: 16,
        color: '#e4e4e4'
    },
    Visa:{
        backgroundColor: '#000979',
    },
    Mastercard: {
        backgroundColor: '#720101',
    }
})