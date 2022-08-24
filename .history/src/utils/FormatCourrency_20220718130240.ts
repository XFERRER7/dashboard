export const FormatCourrency = (current: number): String => {

  return current.toLocaleString(
    'pt-br',
    {
      style: 'cou'
    }
  )
}