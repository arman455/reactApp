import { LikedContextProvider } from '../context/likedContext';
import { useTitle } from '../hooks/useTitle';
import { AppRoutes } from '../routes/AppRoutes';

export function App(){
    
    useTitle("Stariy_Bog")

    return (
        <div>
            <LikedContextProvider>
                <AppRoutes></AppRoutes>
            </LikedContextProvider>
        </div>
    )
}