import { create } from 'zustand';
import axios from 'config/axios';

const useTaskStore = create((set) => ({
    tasks: [],
    fetch: async () => {
        const response = await axios.get('/tasks');
        set((state) => ({ tasks: (state.tasks = response.data) }));
    },
}));

export default useTaskStore;
