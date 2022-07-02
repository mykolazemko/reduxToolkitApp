const BASE_URL = 'https://rickandmortyapi.com/api/character'

export  const getPagination = (currentPage: string) => `${BASE_URL}?page=${currentPage}`
export  const getCharacter = (currentCharacterID: string) => `${BASE_URL}/${currentCharacterID}`
export  const getAvatar = (currentCharacterID: string) => `${BASE_URL}/avatar/${currentCharacterID}.jpeg`
export  const searchCharacter = (chatacterName: string) => `${BASE_URL}?name=${chatacterName}`
