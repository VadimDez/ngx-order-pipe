/**
 * Created by vadimdez on 20/01/2017.
 */
import { NgModule } from '@angular/core';
import { Ng2OrderPipe } from './ng2-order.pipe';

@NgModule({
  declarations: [Ng2OrderPipe],
  exports: [Ng2OrderPipe]
})
export class Ng2OrderModule {}
