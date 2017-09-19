export interface IUser {
    uid: string;
    picture: string;
    loading?: boolean;
    error?: string;
}

export class User {
    constructor(public uid: string, public displayName: string) {}
}
