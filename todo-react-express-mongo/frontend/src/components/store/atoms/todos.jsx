import { atom, selector } from "recoil";

export const todosListState = atom({
    key: "TodoList",
    default: [],
});

export const filterAtom = atom({
    key: "filterAtom",
    default: 'all'
});

export const filteredTodosState = selector({
    key: "filteredTodosState",
    get: ({ get }) => {
        const todos = get(todosListState);
        const searchTerm = 'ddadas'.toLowerCase();
        
        return todos.filter(x => 
            (typeof x.title === 'string' && x.title.toLowerCase().includes(searchTerm)) || 
            (typeof x.description === 'string' && x.description.toLowerCase().includes(searchTerm))
        );
    }
});