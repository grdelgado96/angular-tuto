export interface GameInfo{
    info:{
        title:string,
        steamAppId:string,
        thumb:string
    },
    cheapestPriceEver:{
        price:string,
        date:string
    },
    deals:[{
        storeID:string,
        dealID:string,
        price:string,
        retailPrice:string,
        savings:string
    }]
}

export interface GameLookupParams{
    id:string
}