
export default function useLocalStorage() {
    function getItem(key: string) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    function setItem(key: string, value: string[] ) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    return {getItem, setItem};
}