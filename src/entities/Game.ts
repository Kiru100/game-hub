import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./Publishers";

export default interface Game {
	id: number;
	name: string;
	genres: Genre[];
	publishers: Publishers[];
	background_image: string;
	description_raw: string;
	parent_platforms: { platform: Platform; }[];
	metacritic: number;
	rating_top: number;
	slug: string;
}
