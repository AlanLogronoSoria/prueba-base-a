import { Controller, useForm } from 'react-hook-form';

import {
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function TaskForm({
  onSubmitTask,
}: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View>
      <Controller
        control={control}
        name="title"
        rules={{
          required: 'Campo requerido',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Título"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.title && (
        <Text>
          {String(errors.title.message)}
        </Text>
      )}

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Descripción"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button
        title="Guardar"
        onPress={handleSubmit(onSubmitTask)}
      />
    </View>
  );
}