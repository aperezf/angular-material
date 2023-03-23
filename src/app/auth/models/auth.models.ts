export class JWToken {

    constructor(
        public tokenValue: string,
        public tokenType: string
    ) { }

    public getFullToken(): string {
        return `${this.tokenType} ${this.tokenValue}`;
    }

    public static Empty(): JWToken {
        return new this('', '');
    }
}

export class AppCredential {

    constructor(
        public email: string,
        public password: string
    ) { }

    public static Empty(): AppCredential {
        return new this('', '');
    }
}