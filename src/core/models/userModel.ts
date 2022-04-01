

export interface IUser {
  gender: string
  name: Name
  email: string
  login: Login
  registered: Registered
  picture: Picture
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface Registered {
  date: string
  age: number
}


export interface Picture {
  large: string
  medium: string
  thumbnail: string
}
