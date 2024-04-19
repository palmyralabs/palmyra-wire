import { AuthDecorator } from '..';

declare class BasicAuthProvider implements AuthDecorator {
    username: string;
    password: string;
    BasicAuthProvider(username: string, password: string): void;
    decorate(request: any): void;
}
declare class OauthProvider implements AuthDecorator {
    decorate(request: any): void;
}
export { BasicAuthProvider, OauthProvider };
