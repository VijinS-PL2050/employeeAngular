export class User {

    userId:number=0;
    userName:string='';
    password:string='';
    role:number=0;
    isActive:boolean=true;

    status:number=0;
    data: {
        role:number;
        AccessToken:string;
        UserName: string;
    };
    error: any;
}
