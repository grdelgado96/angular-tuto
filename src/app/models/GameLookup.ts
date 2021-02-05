export interface GameInfo{
    info:{
        title:string,
        steamAppID:string,
        thumb:string
    },
    cheapestPriceEver:{
        price:string,
        date:string
    },
    deals:[
        Deal
    ]
}
export interface Deal{
    deal:{
        storeID:string,
        dealID:string,
        price:string,
        retailPrice:string,
        savings:string
    }
    }

export interface GameLookupParams{
    id:string
}