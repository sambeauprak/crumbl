import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { BookOpen, BoxesIcon, CookieIcon, Folder, LayoutGrid, ReceiptEuroIcon, UsersIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        routeName: 'dashboard.index',
        icon: LayoutGrid,
    },
    {
        title: 'Utilisateurs',
        url: '/dashboard/utilisateurs',
        routeName: 'dashboard.users.index',
        icon: UsersIcon,
    },
    {
        title: 'Produits',
        url: '/dashboard/produits',
        routeName: 'dashboard.products.index',
        icon: CookieIcon,
    },
    {
        title: 'Catégories',
        url: '/dashboard/categories',
        routeName: 'dashboard.categories.index',
        icon: BoxesIcon,
    },
    {
        title: 'Commandes',
        url: '/dashboard/commandes',
        routeName: 'dashboard.orders.index',
        icon: ReceiptEuroIcon,
    },
];

const footerNavItems = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route('dashboard.index')} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
