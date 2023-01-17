import { environment } from "src/environments/environment";

export class ConstantURL {
    /*############################## URL backend  ##############################*/
    // Registration & Login :
    public static readonly LOGIN_URL = environment.GlobalApiUrl+"auth/login"
    public static readonly REGISTER_URL = environment.GlobalApiUrl+"auth/registre"
    // Todo :
    public static readonly TODO_URL = environment.GlobalApiUrl+"todo"
    // Articles :
    public static readonly ARTICLES_LIST_URL = environment.GlobalApiUrl+"article/articleList"
    public static readonly ARTICLE_URL = environment.GlobalApiUrl+"article/articleList"
    public static readonly ADD_ARTICLE_URL = environment.GlobalApiUrl+"article"
    /*############################## URL Admin ################################*/
    public static readonly Users_Url= environment.GlobalApiUrl+"admin/allUser"
    public static readonly RecherhceUser_Url= environment.GlobalApiUrl+"admin/rechercheUser"
    public static readonly userById_Url= environment.GlobalApiUrl+"admin/userById"
    public static readonly UpdateuserById_Url=environment.GlobalApiUrl+"admin/updateuser"
    
    
}