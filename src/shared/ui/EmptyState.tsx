import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function EmptyState({
  message = 'No hay datos',
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },

  text: {
    color: '#777',
  },
});