/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
let permissonArray = [];

export const defaultNavigation: FuseNavigationItem[] = [

            {
                id   : 'campusConnect',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/student/connect'
            },
            // {
            //     id   : 'clubs',
            //     title: 'Clubs',
            //     type : 'basic',
            //     icon : 'heroicons_outline:library',
            //     link : '/student/clubs'
            // },
            // {
            //     id   : 'assignment',
            //     title: 'Groups',
            //     type : 'basic',
            //     icon : 'mat_solid:layers',
            //     link : '/student/groups'
            // },
            // {
            //     id   : 'circulars',
            //     title: 'Circulars',
            //     type : 'basic',
            //     icon : 'mat_solid:layers',
            //     link : '/student/announcement'
            // },
            // {
            //     id   : 'challenges',
            //     title: 'Challenges',
            //     type : 'basic',
            //     icon : 'heroicons_outline:library',
            //     link : '/student/test'
            // },
            // {
            //     id   : 'clubAdmin',
            //     title: 'Club Admin',
            //     type : 'basic',
            //     icon : 'heroicons_outline:users',
            //     link : '/student/test'
            // },
            {
            id      : 'adminPermissions',
            title   : 'Admin Permissions',
            type    : 'group',
            children: getPermissionArray(),
            // children: [
            //     {
            //         id   : 'departments',
            //         title: 'Departments',
            //         type : 'basic',
            //         icon : 'heroicons_outline:question-mark-circle',
            //         link : '/student/departments/list-departments'
            //     },
            //     {
            //         id   : 'roles',
            //         title: 'Roles',
            //         type : 'basic',
            //         icon : 'heroicons_outline:cog',
            //         link : '/student/roles/list-roles'
            //     },
            //     {
            //         id   : 'addClubs',
            //         title: 'Add Clubs',
            //         type : 'basic',
            //         icon : 'heroicons_outline:document-text',
            //         link : '/student/add-clubs/list-clubs'
            //     },
            //     {
            //         id   : 'circulars',
            //         title: 'Circulars',
            //         type : 'basic',
            //         icon : 'mat_solid:layers',
            //         link : '/student/announcement'
            //     },
            //     {
            //         id   : 'events',
            //         title: 'Events',
            //         type : 'basic',
            //         icon : 'heroicons_outline:cube',
            //         link : '/student/events'
            //     },
                // {
                //     id   : 'contentModeration',
                //     title: 'Content Moderation',
                //     type : 'basic',
                //     icon : 'heroicons_outline:thumb-up',
                //     link : '/student/content-moderation/content-to-be-approved'
                // },
        },
        {
            id      : 'Preference',
            title   : 'Preference',
            type    : 'group',
            children: [
                // {
                //     id   : 'support',
                //     title: 'Support',
                //     type : 'basic',
                //     icon : 'heroicons_outline:question-mark-circle',
                //     link : '/student/support'
                // },
                {
                    id   : 'privacy-policy',
                    title: 'Privacy Policy',
                    type : 'basic',
                    icon : 'heroicons_outline:document-text',
                    link : '/student/privacy-policy'
                },
                {
                    id   : 'terms',
                    title: 'Terms and conditions',
                    type : 'basic',
                    icon : 'heroicons_outline:document-text',
                    link : '/student/terms-and-condition'
                },
                {
                    id   : 'sign-out',
                    title: 'Sign-out',
                    type : 'basic',
                    icon : 'heroicons_outline:logout',
                    link : '/sign-out'
                },
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

function getPermissionArray(){
    let allPermissionArray = JSON.parse(localStorage.getItem('userPermission'));
    allPermissionArray?.forEach(element => {
        if(element.allowed_actions?.find(each=> each.action_id === 2 && each.assigned)){
            switch (element.name) {
                // case 'Events':
                //     permissonArray.push({
                //         id   : 'events',
                //         title: 'Events',
                //         type : 'basic',
                //         icon : 'heroicons_outline:cube',
                //         link : '/student/events'
                //     },)
                // break;
                case 'Circular':
                    permissonArray.push({
                        id   : 'circulars',
                        title: 'Circulars',
                        type : 'basic',
                        icon : 'mat_solid:layers',
                        link : '/student/announcement'
                    },)
                break;
                case 'Clubs':
                    permissonArray.push({
                        id   : 'addClubs',
                        title: 'Add Clubs',
                        type : 'basic',
                        icon : 'heroicons_outline:document-text',
                        link : '/student/add-clubs/list-clubs'
                    },)
                break;
                case 'Roles':
                    permissonArray.push({
                        id   : 'roles',
                        title: 'Roles',
                        type : 'basic',
                        icon : 'heroicons_outline:cog',
                        link : '/student/roles/list-roles'
                    },
                    );
                break;
                case 'Departments':
                permissonArray.push({
                    id   : 'departments',
                    title: 'Departments',
                    type : 'basic',
                    icon : 'heroicons_outline:question-mark-circle',
                    link : '/student/departments/list-departments'
                })
                break;
        
            default:
                break;
        }
        }
    });
    return permissonArray;
}
