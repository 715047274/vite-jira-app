import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '@/pages/home/Home';
import NotFound from "@/pages/NoFound";
import JiraIssue from "@/pages/jiraIssue";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='home' element={<Home/>} />
                <Route exact path='/' element={<JiraIssue/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
    );
}