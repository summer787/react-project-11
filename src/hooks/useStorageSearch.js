import { useCallback, useMemo, useState } from "react";

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize }, // serialize => JSON.stringify() | deserialization => JSON.parse()
} = globalThis;

const setData = (key, nextData) => {
  storage.setItem(key, serialize(nextData));
};

const getData = (key) => deserialize(storage.getItem(key));

const deleteData = (key) => {
  storage.removeItem(key);
};

function useStorage(key, defautValue) {
  // useEffect(() => {
  //   const data = getData(key);
  //   setStorageData(data);
  // }, [key]);
  const [storageData, setStorageData] = useState(() => {
    try {
      const data = getData(key);
      return Array.isArray(data) ? data : defautValue;
    } catch (error) {
      return defautValue;
    }
  });

  const update = useCallback(
    (nextData) => {
      setData(key, nextData);
      setStorageData(nextData);
    },
    [key]
  );
  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStorageData([]); // reset the state to an empty array
    } catch (error) {
      throw new Error(error);
    }
  }, [key]);

  const removeItem = useCallback(
    (itemToRemove) => {
      const nextData = storageData.filter((item) => item !== itemToRemove);
      setData(key, nextData);
      setStorageData(nextData);
    },
    [key, storageData]
  );

  return useMemo(
    () => ({
      storageData,
      update,
      remove,
      removeItem,
    }),
    [remove, storageData, update, removeItem]
  );
}

export default useStorage;
