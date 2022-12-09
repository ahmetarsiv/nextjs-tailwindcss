import {useEffect} from 'react';
import '../styles/globals.css';
import {useRouter} from 'next/router';

import {Progress} from './components/progress/Progress';
import {useProgressStore} from '../store';

function MyApp({Component, pageProps}) {
    const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
    const isAnimating = useProgressStore((state) => state.isAnimating);
    const router = useRouter();
    useEffect(() => {
        const handleStart = () => {
            setIsAnimating(true);
        };
        const handleStop = () => {
            setIsAnimating(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return (
        <main className="select-none">
            <Progress isAnimating={isAnimating}/>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;