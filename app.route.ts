import{Routes} from '@angular/router';

import{androidComponent} from './Rooting/android.component';
import{javaComponent} from './Rooting/java.component';
import{homeComponent} from './Rooting/home.component';
import{javaspringComponent} from './Rooting/java.spring.component';
import{javaswingComponent} from './Rooting/java.swing.component';
import{androidideComponent} from './Rooting/android.ide.component';


export const routes:Routes =[
    {path:'', component:homeComponent},
    {path:'java', component:javaComponent,
        children:[
            {path:'spring', component:javaspringComponent},
            {path:'swing', component:javaswingComponent}]
        },
    {path:'android', component:androidComponent,
    children:[
        {path:'type/:ideselectedName', component:androidideComponent}]
}
]