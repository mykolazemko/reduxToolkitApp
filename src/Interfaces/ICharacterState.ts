export interface ICharacterState {
    loading: boolean,
    character: {},
    characters: [] | [object],
    characterID: number,
    searchedCharacterName: string,
    error: string
    page: number
}
