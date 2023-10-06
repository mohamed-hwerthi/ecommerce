import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth/auth.module';
import { RouterModule } from '@angular/router';
import { MyAppplicationComponent } from './modules/my-appplication/my-appplication.component';

@NgModule({
  declarations: [AppComponent, MyAppplicationComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
