export default interface IResponse {
  status: string;
  result_code: number;
  message: string | null;
  results: Array<{ [key: string]: any; }>;
}
