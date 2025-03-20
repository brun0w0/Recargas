import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Planes() {
    const { nombre, telefono, compañia } = useLocalSearchParams();

    const Planes = [
        { id: 1, nombre: 'Paquete Sencillo', capacidad: '500MB', duracion: '1 día', precio: 20, estilo: styles.planSencillo },
        { id: 2, nombre: 'Paquete Básico', capacidad: '1.0GB', duracion: '3 días', precio: 50, estilo: styles.planBasico },
        { id: 3, nombre: 'Paquete Deluxe', capacidad: '3.0GB', duracion: '30 días', precio: 200, estilo: styles.planDeluxe },
        { id: 4, nombre: 'Paquete Platino', capacidad: '10GB', duracion: '60 días', precio: 350, estilo: styles.planPlatino },
        { id: 5, nombre: 'Paquete Oferta', capacidad: '5.0GB', duracion: '35 días', precio: 250, estilo: styles.planOferta },
    ];

    return (
    <ScrollView>   
        <View style={styles.container}>
            <View style={styles.grid}>
                <Text style={styles.gridText}>Planes de Recarga</Text>
            </View>
            <View style={styles.datos}>
                <Text style={styles.textDatosTitulo}>Quiero una recarga para,</Text>
                <Text style={styles.textDatos}>{nombre}</Text>
                <Text style={styles.textDatos}>{telefono}</Text>
            </View>

            {Planes.map((plan) => (
                <TouchableOpacity key={plan.id} style={[styles.basePlan, plan.estilo]} onPress={()=> router.push(`/Pago?nombre=${nombre}&telefono=${telefono}&plan=${plan.nombre}&precio=${plan.precio}&compañia=${compañia}&capacidad=${plan.capacidad}&duracion=${plan.duracion}`)}>
                    <Text style={styles.textPlanNombre}>{plan.nombre}</Text>
                    <Text style={styles.textDatos}>{plan.capacidad} por {plan.duracion}</Text>
                    <Text style={styles.textDatos}>${plan.precio} MXN</Text>
                </TouchableOpacity>
            ))}
        </View>
        </ScrollView> 
    );
}

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
    },
    textDatos: {
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'left',
        color: '#fff',
    },
    textDatosTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#d7b1fe',
    },
    textPlanNombre: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },  
    basePlan: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        width: '95%',
    },
    planSencillo: {
        backgroundColor: "#3ca9d2",
    },
    planBasico: {
        backgroundColor: "#8040a0",
    },
    planDeluxe: {
        backgroundColor: "#cc464d",
    },
    planPlatino: {
        backgroundColor: "#3da486",
    },
    planOferta: {
        backgroundColor: "#161616",
        borderColor: 'white',
        borderWidth: 2,
        paddingBottom: 50,
        paddingTop: 50,
    },

});
