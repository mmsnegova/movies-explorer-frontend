import { useEffect, useState } from 'react';

export default function useSerchMovies(search, movies) {
    const [errorGetMovies, setErrorGetMovies] = useState('');
    useEffect(() => {
        if (search) {
            if (movies.length === 0) {
                setErrorGetMovies('Ничего не найдено');
            } else {
                setErrorGetMovies('');
            }
        } else {
            setErrorGetMovies('');
        }
    }, [movies]);

    return {
        errorGetMovies,
    };
}
