declare module 'term-logger' {
  export function error(data: string): void;
  export function critical(data: string): void;
  export function success(data: string): void;
  export function warn(data: string): void;
  export function await(data: string): void;
  export function complete(data: string): void;
  export function debug(data: string): void;
  export function fatal(data: string): void;
  export function info(data: string): void;
  export function note(data: string): void;
  export function pending(data: string): void;
  export function start(data: string): void;
  export function watch(data: string): void;
  export function log(data: string): void;
  export function ready(data: string): void;
  export function command(data: string): void;
  export function event(data: string): void;
  export function database(data: string): void;
  export function shard(data: string): void;
  export function cluster(data: string): void;
}
