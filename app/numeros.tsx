import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export default function Numeros() {
    const router = useRouter();
    const numeros = [
        { id: 1, compañia: 'Telcel', nombre: 'Bruno', telefono: '998 631 4580' },
        { id: 2, compañia: 'Pillofon', nombre: 'Hector', telefono: '998 002 1753' },
        { id: 3, compañia: 'Telcel', nombre: 'Sergio', telefono: '998 634 5221' },
        { id: 4, compañia: 'Vodafone', nombre: 'Misael', telefono: '998 478 0100' },
        { id: 5, compañia: 'Pillofon', nombre: 'Adriel', telefono: '998 636 9714' },
        { id: 6, compañia: 'AT&T', nombre: 'Celeste', telefono: '998 989 83210' },
        { id: 7, compañia: 'Telcel', nombre: 'Kevin', telefono: '998 632 0177' },
        { id: 8, compañia: 'Unefon', nombre: 'Nahui', telefono: '998 369 8520' },
        { id: 9, compañia: 'Telcel', nombre: 'Arturo', telefono: '998 742 9630' },
    ];

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.container}>
                <Text style={styles.texto1}>Números registrados</Text>
                <View style={styles.grid}>
                    {numeros.map((num) => (
                        <TouchableOpacity key={num.id} style={styles.botonCelulares} onPress={() => router.push(`/Planes?nombre=${num.nombre}&telefono=${num.telefono}&compañia=${num.compañia}`)}>
                            <Text style={styles.textoCompañia}>{num.compañia}</Text>
                            <Text style={styles.textoNombre}>{num.nombre}</Text>
                            <Text style={styles.textoTelefono}>{num.telefono}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1029",
    },
    texto1: {
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',
        margin: 20,
        color: '#fff',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    botonCelulares: {
        backgroundColor: "#c00079",
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        margin: 10,
        width: '92%',
        minWidth: 100,
    },
    textoCompañia: {
        fontSize: 35,
        fontWeight: '400',
        color: '#ffc2d2',
    },
    textoNombre: {
        fontSize: 25,
        fontWeight: '500',
        color: '#fff',
    },
    textoTelefono: {
        fontSize: 18,
        fontWeight: '300',
        color: '#fff',
    }
});
