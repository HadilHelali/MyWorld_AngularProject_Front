import { environment } from "src/environments/environment";

export class ConstantURL {

    /*############################## URL backend  ##############################*/
    public static readonly LOGIN_URL = environment.GlobalApiUrl+"auth/login"
    public static readonly REGISTER_URL = environment.GlobalApiUrl+"auth/registre"
    public static readonly ARTICLES_LIST_URL = environment.GlobalApiUrl+"article/articleList"
    public static readonly ARTICLE_URL = environment.GlobalApiUrl+"article/articleList"
    public static readonly ADD_ARTICLE_URL = environment.GlobalApiUrl+"article"
    
}