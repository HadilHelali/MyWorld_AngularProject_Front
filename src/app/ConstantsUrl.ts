import { environment } from "src/environments/environment";

export class ConstantURL {

    /*############################## URL backend  ##############################*/
    public static readonly LOGIN_URL = environment.GlobalApiUrl+"auth/login"

    /*############################## URL Admin ################################*/
    public static readonly Users_Url= environment.GlobalApiUrl+"admin/allUser"
    public static readonly RecherhceUser_Url= environment.GlobalApiUrl+"admin/rechercheUser"
    public static readonly userById_Url= environment.GlobalApiUrl+"admin/userById"
    public static readonly UpdateuserById_Url=environment.GlobalApiUrl+"admin/updateuser"
}