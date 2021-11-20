import {FavoriteGame, GameExperience, StreamerSponsor, TournamentExperience} from "./profile-entity";

export interface User {
    id: number,
    username: string,
    email: string,
    "game-experiences": GameExperience[],
    "tournament-experiences": TournamentExperience[],
    "favourite-games": FavoriteGame[],
    "streamer-sponsors": StreamerSponsor[],
    password?:string;
}
