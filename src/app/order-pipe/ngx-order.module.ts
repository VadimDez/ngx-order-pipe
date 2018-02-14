/**
 * Created by vadimdez on 20/01/2017.
 */
import { NgModule } from '@angular/core';
import { OrderPipe } from './ngx-order.pipe';

@NgModule({
  declarations: [OrderPipe],
  exports: [OrderPipe],
  providers: [OrderPipe]
})
export class OrderModule {}
