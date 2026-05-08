import {
    StyleSheet,
    TextInput,
} from 'react-native';

export default function Input(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
});