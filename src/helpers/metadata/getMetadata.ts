export const getMetadata = (title: string, description?: string) => ({
  title: `${title} | Webfolio`,
  description: `Webfolio | ${description || title}`,
})
