import './App.css'
import {Suspense} from 'react';
import {Spin} from 'antd';

import AppRoutes from "./routes/Routes";
import {ErrorBoundary} from "@/components/index";

function App() {
    return(<Suspense fallback={<Spin/>}>
            <ErrorBoundary>{AppRoutes()}</ErrorBoundary>
        </Suspense>
    )
}

export default App
