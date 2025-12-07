
export default function useValidation() {

    const validateMovie = {
        title: (value) => {
            if (!value?.trim()) return 'Title is required!';
            if (value.length < 2) return 'Title must be at least 2 characters!';
            return null;
        },
        year: (value) => {
            if (!value) return 'Year is required!';
            if (value < 1950 || value > 2025) return 'Year must be between 1950-2025!';
            return null;
        },
        genre: (value) => {
            if (!value?.trim()) return 'Genre is required!';
            return null;
        },
        duration: (value) => {
            if (!value) return 'Duration is required!';
            if (value < 1 || value > 500) return 'Duration must be between 1-500!';
            return null;
        },
        rating: (value) => {
            if (!value) return 'Rating is required!';
            if (value < 1 || value > 5) return 'Rating must be between 1-5!';
            return null;
        },
        imageUrl: (value) => {
            if (!value?.trim()) return 'Image URL is required!';
            if (!value.startsWith('http')) return 'Must be a valid URL!';
            return null;
        },
        description: (value) => {
            if (!value?.trim()) return 'Description is required!';
            if (value.length < 6) return 'Description must be at least 6 characters!';
            return null;
        },
    };

    const validateAuthRegister = {
        email: (value) => {
            if (!value?.trim()) return 'Email is required!';
            if (!value.includes('@')) return 'Please enter a valid email address!';
            return null;
        },
        password: (value) => {
            if (!value) return 'Password is required!';
            if (value.length < 6) return 'Password must be at least 6 characters!';
            return null;
        },
        rePassword: (value, allValues) => {
            if (!value) return 'Please confirm your password!';
            if (value !== allValues?.password) return 'Passwords do not match!';
            return null;
        },
    };

    const validateAuthLogin = {
        email: (value) => {
            if (!value?.trim()) return 'Email is required!';
            if (!value.includes('@')) return 'Please enter a valid email address!';
            return null;
        },
        password: (value) => {
            if (!value) return 'Password is required!';
            if (value.length < 6) return 'Password must be at least 6 characters!';
            return null;
        },
    };

    return {
        validateMovie,
        validateAuthRegister,
        validateAuthLogin,
    };
}