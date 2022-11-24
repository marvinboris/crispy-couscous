export default interface LanguageType {
    name: string
    abbr: string
    flag: string
    items?: { name: string, abbr: string }[]
}