import { LikedContextProvider } from '../context/likedContext';
import { UserContextProvider } from '../context/userContext';
import { useTitle } from '../hooks/useTitle';
import { AppRoutes } from '../routes/AppRoutes';

export function App(){
    
    useTitle("Stariy_Bog")

    return (
        <div>
            <UserContextProvider>
                <LikedContextProvider>
                    <AppRoutes></AppRoutes>
                </LikedContextProvider>
            </UserContextProvider>
        </div>
    )
}