export const getMetadata = async (title: string, description?: string) => ({
  title: `${title} | Webfolio`,
  description: `Webfolio | ${description || title}`,
})
