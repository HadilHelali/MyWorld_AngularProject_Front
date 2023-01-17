import { environment } from "src/environments/environment";

export class ConstantURL {

    /*############################## URL backend  ##############################*/
    public static readonly LOGIN_URL = environment.GlobalApiUrl+"auth/login"

    public static readonly TODO_URL = environment.GlobalApiUrl+"todo"
    
    
}