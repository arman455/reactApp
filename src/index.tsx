import {createRoot} from 'react-dom/client'
import { App } from "./components/App";

const rootElem = document.querySelector('#root') as HTMLElement
const root = createRoot(rootElem);

root.render(<App></App>);