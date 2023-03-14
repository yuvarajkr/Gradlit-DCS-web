export interface User
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    status?: string;
}


export interface UserObj {
    id: number,
    name: string,
    usn: string,
    email: string,
    department_id: number,
    token: {
        access: string,
        refresh: string,
        access_exp: number
    },
    permissions: [
        {
            id: number,
            name: string
        }
    ],
    user_permissions: [
        {
            id: number,
            permissions_id: number,
            is_allow: boolean
        }
    ]
}