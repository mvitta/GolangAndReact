export function convertURLtoNameUser(url: string): string {
  return url.indexOf('@') > -1 ? url.substring(url.indexOf('@')) : 'Desconocido'
}

export function formatGolangParagraph(str: string): string[] {
  return str.split('--')
}
