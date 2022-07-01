import { environment } from "src/environments/environment";

export const SWAPI_BASE_URL = environment.apiUrl

export interface ListResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
