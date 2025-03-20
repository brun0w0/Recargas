import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export default function Listo() {
    const router = useRouter();
    const { nombre, telefono, plan, red, terminacion, precio, compañia, capacidad, duracion } = useLocalSearchParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#c00079" />
                <Text style={styles.loadingText}>Procesando pago...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.pagoRealizado}>
                    <Text style={styles.textPago}>Pago realizado con éxito.</Text>
                </View>
                <View style={styles.detalles}>
                    <Text style={styles.textDetalles}>Tu recibo</Text>
                </View>
                <View style={styles.datos}>
                    <Text style={styles.textoAfuera}>Recarga realizada a</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>{nombre}</Text>
                        <Text style={styles.text}>{telefono}</Text>
                    </View>
                    <Text style={styles.textoAfuera}>Compañía</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>{compañia}.</Text>
                    </View>
                    <Text style={styles.textoAfuera}>Paquete seleccionado</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>{plan}.</Text>
                    </View>
                    <Text style={styles.textoAfuera}>Tus beneficios</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>{capacidad} por {duracion}.</Text>
                    </View>
                    <Text style={styles.textoAfuera}>Pagado con</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>{red} que termina en {terminacion}.</Text>
                    </View>
                    <Text style={styles.textoAfuera}>Total</Text>
                    <View style={styles.datosDentro}>
                        <Text style={styles.text}>${precio} MXN.</Text>
                    </View>
                    <Text style={styles.iva}>*Incluyendo impuestos.</Text>
                </View>
                <TouchableOpacity style={styles.botonRegresar} onPress={()=>router.push(`./`)}>
                    <Text style={styles.textRegresar}>Regresar al inicio</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1029",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: "#fff",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1029",
        padding: 10,
    },
    pagoRealizado: {
        backgroundColor: '#01ae03',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: '200%',
    },
    textPago: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    detalles: {
        marginTop: 70,
        marginBottom: 10,
    },
    textDetalles: {
        color: '#fff',
        fontSize: 27,
    },
    datos: {
        backgroundColor: '#3d3d3d',
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: '98%',
        borderWidth: 1,
        borderColor: '#ff1'
    },
    datosDentro: {
        backgroundColor: '#343434',
        padding: 15,
        borderRadius: 10,
        margin: 5,
    },
    textoAfuera: {
        fontSize: 24,
        margin: 10,
        color: '#fff',
        fontWeight: '800',
    },
    text: {
        fontSize: 17,
        fontWeight: '100',
        color: '#fff'
    },
    iva: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 10,
    },
    botonRegresar: {
        backgroundColor: '#c252e2',
        padding: 20,
        margin: 25,
        borderRadius: 20,
    },
    textRegresar: {
        fontSize: 20,
        color: '#fff'
    }
});
