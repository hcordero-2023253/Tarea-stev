import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
    // Estados - INICIALMENTE NO AUTENTICADO
    isLoading: true, // ✅ Cambiar a true para verificar autenticación
    isAuthenticated: false, // ✅ Cambiar a false para forzar login
    user: null, // ✅ Cambiar a null inicialmente
    error: null,

    // Login simulado
    login: async (username, password) => {
        set({ isLoading: true, error: null });
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (username === 'admin' && password === '1234') {
            const user = { 
                username: username, 
                roles: ['ADMIN'],
                authenticated: true 
            };
            set({ 
                isAuthenticated: true, 
                user: user,
                isLoading: false 
            });
            return user;
        } else {
            set({ 
                error: 'Credenciales incorrectas. Usa: admin / 1234', 
                isLoading: false 
            });
            throw new Error('Credenciales incorrectas');
        }
    },

    // Logout simulado
    logout: async () => {
        localStorage.removeItem('authToken'); // Limpiar token
        set({ 
            isAuthenticated: false, 
            user: null,
            isLoading: false 
        });
    },

    // Clear error
    clearError: () => set({ error: null }),

    // Inicializar - VERIFICAR SI HAY SESIÓN GUARDADA
    initializeAuth: () => {
        // Simular verificación de token en localStorage
        const token = localStorage.getItem('authToken');
        
        if (token) {
            // Si hay token, establecer como autenticado
            set({ 
                isAuthenticated: true,
                user: { 
                    username: 'admin', 
                    roles: ['ADMIN'],
                    authenticated: true 
                },
                isLoading: false
            });
        } else {
            // Si no hay token, no autenticado
            set({ 
                isAuthenticated: false,
                user: null,
                isLoading: false
            });
        }
    }
}));