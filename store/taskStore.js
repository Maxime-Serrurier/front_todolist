import { create } from 'zustand';
import axios from 'config/axios';

const useTaskStore = create((set) => ({
    tasks: [],
    taskStatus: {},
    countTask: 0,
    fetchTasks: async () => {
        try {
            const response = await axios.get('/tasks');
            const tasks = response.data;
            const taskStatus = tasks.reduce((statusMap, task) => {
                statusMap[task.id] = task.status;
                return statusMap;
            }, {});
            set({
                tasks: tasks,
                countTask: response.data.length,
                taskStatus: taskStatus,
            });
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

    updateTask: async (taskId, taskValue, newStatus) => {
        try {
            await axios.put(`/tasks/${taskId}`, {
                title: taskValue,
                status: newStatus,
            });

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === taskId
                        ? { ...task, title: taskValue }
                        : task
                ),
            }));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    },

    toggleTaskStatus: async (taskId, newStatus, taskValue) => {
        try {
            await axios.put(`/tasks/${taskId}`, {
                title: taskValue,
                status: newStatus,
            });

            set((state) => ({
                tasks: state.tasks.map((task) =>
                    task.id === taskId
                        ? { ...task, status: newStatus }
                        : task
                ),
            }));
        } catch (error) {
            console.error('Error toggling task status:', error);
        }
    },
}));

export default useTaskStore;
