
import{ Component } from '@angular/core';

@Component({
    selector: 'kpm-app',
    template: `
         <div><login></login></div>  
         <!-- <div><el-app></el-app></div>-->
        <!-- <hello-world></hello-world> -->
        `

})
export class AppComponent{
    pageTitle: string = "Kids Management App"
}