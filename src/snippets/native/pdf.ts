import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export const generatePDF = async () => {
  const html = `
    <html>
      <body
        style="
          font-family: Arial;
          padding: 20px;
        "
      >
        <h1>
          Reporte de Tareas
        </h1>

        <p>
          PDF generado desde Expo
          + React Native.
        </p>

        <ul>
          <li>CRUD funcional</li>
          <li>Supabase integrado</li>
          <li>Expo Router</li>
          <li>Arquitectura FSD</li>
        </ul>
      </body>
    </html>
  `;

  const file =
    await Print.printToFileAsync({
      html,
    });

  await Sharing.shareAsync(file.uri);
};