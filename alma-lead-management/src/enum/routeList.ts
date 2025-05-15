
export type RouteItem = {
    path: string;
    name: string;
};

export const sideBarRoutes: RouteItem[] = [
    { path: '/management', name: 'Leads' },
    { path: '/Settings', name: 'Settings' },
    { path: '/', name: 'PublicLead' },
    { path: '/logout', name: 'Logout' },
];