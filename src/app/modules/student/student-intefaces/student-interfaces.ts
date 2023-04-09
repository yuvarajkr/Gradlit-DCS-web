export interface CreatePostPayload {
head:string,
type: number,
event_name?: string,
event_description?:string,
venue?:string,
start_date?:string,
end_date?:string,
is_notification?:string,
question?:string,
option1?:string,
option2?:string
poll_end_date?:string,
photos?: File,
files?: File,
vedios?: File,
event_file ?: File
}

export interface CreateClubPayload {
        department_id :string,
        user_id:number,
        name :string,
        description :string,
        display_name : string,
        allow_notices : 0 | 1,
        allow_events :0 | 1,
        allow_delete_post:0 | 1,
        allow_push_notification:0 | 1
    }

export interface CreateAnnouncementsPayload{
        heading:string,
        group_name:string,
        description:string,
        file_name:File
}

export interface CreateCircularPayload{
        heading:string,
        group_name:string,
        description:string,
        file_name:File
}

export interface ServerResponse {
        status: boolean,
        message: string
}