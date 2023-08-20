/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

            {
                id   : 'campusConnect',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/student/connect'
            },
            {
                id   : 'events',
                title: 'Events',
                type : 'basic',
                icon : 'heroicons_outline:cube',
                link : '/student/events'
            },
            {
                id   : 'clubs',
                title: 'Clubs',
                type : 'basic',
                icon : 'heroicons_outline:library',
                link : '/student/clubs'
            },
            {
                id   : 'assignment',
                title: 'Groups',
                type : 'basic',
                icon : 'mat_solid:layers',
                link : '/student/groups'
            },
            {
                id   : 'directMessage',
                title: 'Direct Message',
                type : 'basic',
                icon : 'mat_solid:layers',
                link : '/student/assignment'
            },
            {
                id   : 'challenges',
                title: 'Challenges',
                type : 'basic',
                icon : 'heroicons_outline:library',
                link : '/student/test'
            },
            {
            id      : 'adminPermissions',
            title   : 'Admin Permissions',
            type    : 'group',
            children: [
                {
                    id   : 'departments',
                    title: 'Departments',
                    type : 'basic',
                    icon : 'heroicons_outline:question-mark-circle',
                    link : '/student/departments/list-departments'
                },
                {
                    id   : 'roles',
                    title: 'Roles',
                    type : 'basic',
                    icon : 'heroicons_outline:cog',
                    link : '/student/roles/list-roles'
                },
                {
                    id   : 'addClubs',
                    title: 'Add Clubs',
                    type : 'basic',
                    icon : 'heroicons_outline:document-text',
                    link : '/student/add-clubs/list-clubs'
                }
            ]
        },
        {
            id      : 'Preference',
            title   : 'Preference',
            type    : 'group',
            children: [
                {
                    id   : 'support',
                    title: 'Support',
                    type : 'basic',
                    icon : 'heroicons_outline:question-mark-circle',
                    link : '/student/support'
                },
                {
                    id   : 'settings',
                    title: 'Settings',
                    type : 'basic',
                    icon : 'heroicons_outline:cog',
                    link : '/student/settings'
                },
                {
                    id   : 'privacy-policy',
                    title: 'Privacy Policy',
                    type : 'basic',
                    icon : 'heroicons_outline:document-text',
                    link : '/student/privacy-policy'
                }
            ]
        } 

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
