import { AuthDecorator } from '..';

declare class BasicAuthProvider implements AuthDecorator {
    username: string;
    password: string;
    BasicAuthProvider(username: any, password: any): void;
    decorate(request: any): void;
}
declare class OauthProvider implements AuthDecorator {
    decorate(request: any): void;
}
export { BasicAuthProvider, OauthProvider };
