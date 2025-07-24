import yaml from 'js-yaml'

/**
 * Loads and parses YAML data from a public URL
 * @param {string} filename - The filename to load (should be in the public directory)
 * @returns {Promise<Object>} Parsed YAML data
 * @throws {Error} If the file cannot be loaded or parsed
 */
export const loadYamlData = async filename => {
  try {
    // Use import.meta.env.BASE_URL to get the correct base path
    const basePath = import.meta.env.BASE_URL || '/'
    const url = `${basePath}${filename}`.replace(/\/+/g, '/') // Remove duplicate slashes
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(
        `Failed to load ${filename}: ${response.status} ${response.statusText}`
      )
    }
    const yamlText = await response.text()
    const data = yaml.load(yamlText)
    return data
  } catch (error) {
    console.error(`Error loading YAML data from ${filename}:`, error)
    throw error
  }
}
