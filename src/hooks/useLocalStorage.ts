import {useState} from "react";
import {Deserializer, Serializer} from "../types/Serialize";

type UseLocalStorageReturnType<T = any> = [T, (x: T) => void];

export const useLocalStorage = <T = any>(
  key: string,
  initialValue: T,
  serialize: Serializer<T> = JSON.stringify,
  deserialize: Deserializer<T> = JSON.parse,
): UseLocalStorageReturnType<T> => {
  const localStorageValue = localStorage.getItem(key);
  const defaultValue = localStorageValue ? deserialize(localStorageValue) : initialValue;
  const [state, setState] = useState<T>(defaultValue);

  const setStorageState = (x: T): void => {
    localStorage.setItem(key, serialize(x));
    setState(x);
  };

  return [state, setStorageState];
}
