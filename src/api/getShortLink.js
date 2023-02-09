export const getShortLink = async (url) => {
    const apiURL = `https://api.shrtco.de/v2/shorten?url=${url}`
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
}