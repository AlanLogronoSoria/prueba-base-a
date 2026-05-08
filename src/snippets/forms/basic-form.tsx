import { Controller, useForm } from 'react-hook-form';
import {
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function BasicForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Campo requerido' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Título"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.title && (
        <Text>{String(errors.title.message)}</Text>
      )}

      <Button
        title="Guardar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}