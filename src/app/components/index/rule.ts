// the interface that tells angular the kind of back-end data that will be displayed
export interface Rule {
    _id: number;
    description: string;
    tags: string[];
    thumbsUp: number;
    thumbsDown: number;

}