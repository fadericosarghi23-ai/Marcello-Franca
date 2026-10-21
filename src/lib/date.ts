/** "2020-02-04" → "4 febbraio 2020" */
export const dataEstesa = (iso: string, lingua = 'it-IT') =>
  new Date(`${iso}T12:00:00`).toLocaleDateString(lingua, { day: 'numeric', month: 'long', year: 'numeric' });
