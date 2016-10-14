import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

import { ProblemsService } from './problems.service';
import { ProblemsComponent } from './problems.component';

@NgModule({
  imports: [ CommonModule , HttpModule ],
  declarations: [ ProblemsComponent ],
  exports: [ ProblemsComponent ],
  providers: [ProblemsService]
})
export class ProblemsModule { }
