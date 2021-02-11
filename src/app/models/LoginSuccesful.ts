export interface LoginSuc{
    token: string
}

export interface UserModel{
    email:string;
    password:string;
  }

export interface RegisterSuc{
    id :string;
    token: string
}