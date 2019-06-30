import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderModule } from "./order-pipe/ngx-order.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OrderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
