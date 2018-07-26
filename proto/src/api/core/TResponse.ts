export default interface TResponse {
    status: string
    result_code: number
    message: string | null
    results: { [key: string]: any; }[]
}
