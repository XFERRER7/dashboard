export const FormatCourrency = (current: number): string => {

  return current.toLocaleString(
    'pt-br',
    {
      style: 'currency',
      currency: 'BRL'
    }
  );
}