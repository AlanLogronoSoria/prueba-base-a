import {
    Text,
    TouchableOpacity,
} from 'react-native';

export default function Button({
  title,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#000',
        padding: 14,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: '#fff' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}