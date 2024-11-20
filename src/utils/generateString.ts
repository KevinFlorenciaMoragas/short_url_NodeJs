const createShortCode = (): string => {
    const characters: string = "abcdefghijklmnopqrstwyz0123456789"
    const length: number = 10
    let newWord: string = ''
    for (let i: number = 0; i < length; i++) {
        let selectedCharacter = Math.floor(Math.random() * characters.length)
        newWord += characters[selectedCharacter]
    }
    return newWord
}
export default createShortCode;