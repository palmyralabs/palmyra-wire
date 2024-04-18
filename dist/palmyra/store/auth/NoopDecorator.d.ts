import { AuthDecorator } from '..';

declare class NoAuthDecorator implements AuthDecorator {
    decorate(_request: any): void;
}
declare const NOOPDecorator: NoAuthDecorator;
export { NOOPDecorator };
