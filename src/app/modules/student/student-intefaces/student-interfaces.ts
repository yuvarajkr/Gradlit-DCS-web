export interface CreatePostPayload {
head:string,
type: number,
event_name: string,
event_description:string,
venue:string,
start_date:string,
end_date:string,
is_notification:string,
question:string,
option1:string,
option2:string
poll_end_date:string,
photos: File,
files: File,
vedios: File,
event_file : File
}

export interface ServerResponse {
        status: boolean,
        message: string
}