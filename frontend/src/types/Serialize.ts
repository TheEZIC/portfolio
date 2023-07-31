export type Serializer<T = any> = (x: T) => string;
export type Deserializer<T = any> = (x: string) => T;
