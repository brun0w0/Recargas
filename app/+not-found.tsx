import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText style={styles.texto} type="title">Esta parte aún no existe.</ThemedText>
        <ThemedText style={styles.texto2} type="title">¿Qué haces aqui?</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText style={styles.textlink} type="link">Volver al inicio</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#c252e2',
    borderRadius: 20,
  },
  textlink: {
    color: '#fff',
    textAlign: 'center',
  },
  texto: {
    textAlign: 'center',
    margin: 10,
  },
  texto2: {
    textAlign: 'center',
    margin: 12,
    fontSize: 20
  },

});
