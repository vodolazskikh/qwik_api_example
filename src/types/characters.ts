export interface ICharacter {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: ICharacter[];
}
