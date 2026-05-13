import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Excuse } from "./useExcuses";

const STORAGE_KEY = "@excuses_history";

export function useHistory() {
  const [history, setHistory] = useState<Excuse[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (raw) {
        try {
          setHistory(JSON.parse(raw));
        } catch {
          // ignore corrupt data
        }
      }
    });
  }, []);

  const persist = useCallback((next: Excuse[]) => {
    setHistory(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const add = useCallback(
    (excuse: Excuse) => {
      persist([excuse, ...history].slice(0, 200));
    },
    [history, persist]
  );

  const clear = useCallback(() => {
    persist([]);
  }, [persist]);

  return { history, add, clear };
}
