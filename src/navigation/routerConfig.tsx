import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Notfound from './notfound';

const Users = React.lazy(
    () => import("./../pages/Users/users")
);

export default function RouterConfig() {
    return (
        <React.Suspense fallback="Loading..">
            <Routes>
                <Route path="/" element={<Navigate replace to="/users" />} />
                <Route path="/users" element={<Users />} />
                <Route path="/*" element={<Notfound />} />

            </Routes>
        </React.Suspense>
    )
}
