export interface GameList{
    gameID:string,
    steamAppID:string,
    cheapest:string,
    cheapestDealID:string,
    external:string,
    thumb:string
}

export interface GameParams{
    title:string,
    steamAppID:Number,
    limit:Number,
    exact:boolean
}