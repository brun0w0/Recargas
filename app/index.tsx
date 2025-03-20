import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Index() {
    const router = useRouter();
    const imagen = { imagen: 'https://cdn-icons-png.freepik.com/512/7638/7638739.png' }
    return (
        <View style={styles.container}>
            <Image source={{ uri: imagen.imagen }} style={styles.imagen} />
            <Text style={styles.texto1}>SALFON</Text>
            <Text style={styles.texto2}>Innovate and transform</Text>
            <TouchableOpacity
                style={styles.botonRecargar}
                onPress={() => router.push('/numeros')}>
                <Text style={styles.textoRecargar}>Recargar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1029",
    },
    texto1: {
        fontSize: 50,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },
    texto2: {
        fontSize: 20,
        fontWeight: '100',
        color: '#fff',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    botonRecargar: {
        backgroundColor: "#c252e2",
        borderColor: 'black',
        borderWidth: 0,
        padding: 15,
        borderRadius: 60,
        margin: 20,
        width: '60%',
    },
    textoRecargar: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center"
    },
    imagen: {
        width: 200,
        height: 200,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center'
    }
}) 