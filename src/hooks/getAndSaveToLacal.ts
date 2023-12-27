import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  state: any;
  setState: Dispatch<SetStateAction<any>>;
  interval: number;
  key: string;
};

const useGetAndSaveToLocalStorage = ({
  state,
  setState,
  interval = 500,
  key,
}: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  // get user on first render
  useEffect(() => {
    const str = localStorage.getItem(key);
    if (str) {
      const state = JSON.parse(str);
      setState(state);
    }

    setIsFirstRender(true);
  }, []);

  // save user to local store
  useEffect(() => {
    if (!isFirstRender) {
      return;
    }
    const setToLocalStorage = setTimeout(
      () => localStorage.setItem(key, JSON.stringify(state)),
      interval
    );

    return () => clearInterval(setToLocalStorage);
  }, [JSON.stringify(state), key]);

  return {
    isFirstRender,
  };
};

export default useGetAndSaveToLocalStorage;
