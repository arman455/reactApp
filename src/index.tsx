import {createRoot} from 'react-dom/client'
import { App } from "./shared/App";

const rootElem = document.querySelector('#root') as HTMLElement
const root = createRoot(rootElem);

root.render(<App></App>);