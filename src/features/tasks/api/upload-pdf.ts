import { supabase } from '@/shared/lib/supabase';

export const uploadPDF = async (
  file: any
) => {
  const response = await fetch(file.uri);

  const arrayBuffer =
    await response.arrayBuffer();

  const fileName =
    `${Date.now()}.pdf`;

  const { error } = await supabase.storage
    .from('pdfs')
    .upload(fileName, arrayBuffer, {
      contentType: 'application/pdf',
    });

  if (error) {
    console.error(error);

    throw error;
  }

  const { data } = supabase.storage
    .from('documentos')
    .getPublicUrl(fileName);

  return data.publicUrl;
};