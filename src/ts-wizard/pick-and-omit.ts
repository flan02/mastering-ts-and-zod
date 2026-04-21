
type Album = {
  title: string;
  artist: string;
  releaseYear?: number;
  genre?: {
    parentGenre?: string
    subGenre?: string
  }
};


// ? Pick and Omit work on object shapes
type AlbumData1 = Pick<Album, 'title' | 'artist'>; // { title: string; artist: string; }
type AlbumData2 = Omit<Album, 'id' | 'releaseYear' | 'genre'>; // { title: string; artist: string; }


// ! Exclude and Extract work on union types. Do not use to remove properties from an object type, use Omit instead. Exclude and Extract are for working with union types, not for working with object types. If you want to remove properties from an object type.
type AlbumExtract1 = Extract<Album, "title" | "artist">
type AlbumExclude2 = Exclude<Album, "releaseYear" | "genre">




