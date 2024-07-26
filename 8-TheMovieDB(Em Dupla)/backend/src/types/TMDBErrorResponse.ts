// https://developer.themoviedb.org/docs/errors
export type TMDBErrorResponse = {
  status_code: number;
  status_message: string;
  success: boolean;
};
