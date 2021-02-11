export interface GameInfo{
    info:{
        title:string,
        steamAppID:string,
        thumb:string
    },
    cheapestPriceEver:{
        price:number,
        date:string
    },
    deals:[
        Deal
    ]
}
export interface Deal{
        storeID:string,
        dealID:string,
        price:number,
        retailPrice:number,
        savings:string
    
    }

export interface GameLookupParams{
    id:string
}