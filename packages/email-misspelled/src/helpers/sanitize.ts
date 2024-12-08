export const sanitizeString = (value: string): string =>
  value.replaceAll(/(<script)(.*)(>)(.*)(<\/script>)/gi, "")
