export interface Users{
    data:[
        User
    ]
}

export interface User{
    id:string;
    lastName:string;
    firstName:string;
    email:string;
    title: string;
    picture:string;
}
