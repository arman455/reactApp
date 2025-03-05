import { LikedContextProvider } from '../context/likedContext';
import { useTitle } from '../hooks/useTitle';
import { AppRoutes } from '../routes/AppRoutes';

export function App(){
    // тайтл делаем для кажой страницы(page) отдельно
    useTitle("Stariy_Bog")

    return (
        <div>
            <LikedContextProvider>
                <AppRoutes></AppRoutes>
            </LikedContextProvider>
        </div>
    )
}