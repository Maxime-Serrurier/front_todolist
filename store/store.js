import { create } from 'zustand';
import axios from 'config/axios';

const useTaskStore = create((set) => ({
    tasks: [],
    countTask: 0,
    fetchTasks: async () => {
        try {
            const response = await axios.get('/tasks');
            set({ tasks: response.data });
            set({ countTask: response.data.length });
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    },

    deleteTask: async (id) => {
        try {
            await axios.delete(`/tasks/${id}`);
            set((state) => ({
                tasks: state.tasks.filter((task) => task.id !== id),
                countTask: state.countTask - 1,
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    },

    createTask: async (inputTask) => {
        try {
            const response = await axios.post('/tasks', {
                title: inputTask,
            });
            set((state) => ({
                tasks: [...state.tasks, response.data],
                countTask: state.countTask + 1,
            }));
        } catch (error) {
            console.error('Error creating task:', error);
        }
    },
}));

export default useTaskStore;
