export interface Profile{
    id:string;
    phone:string;
    lastName:string;
    firstName:string;
    location:[loc];
    email:string;
    gender:string;
    title: string;
    registerDate:string;
    picture:string;
    dateOfBirth:string
}
export interface loc{
    state:string;
    street:string;
    city:string;
    timezone:string;
    country:string
}
export interface UserProfileParams{
    id:string
} 