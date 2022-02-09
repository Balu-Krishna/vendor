import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CreatestoreComponent } from './createstore/createstore.component';
import { MaterialModule } from 'src/material.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddstoreComponent } from './addstore/addstore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddprodcutsComponent } from './addprodcuts/addprodcuts.component';
import { OffersComponent } from './offers/offers.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { AddbankdetailsComponent } from './addbankdetails/addbankdetails.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CreatepromotionsComponent } from './createpromotions/createpromotions.component';
import { PosComponent } from './pos/pos.component';
import { StoremanagamentComponent } from './storemanagament/storemanagament.component';
import { Select_dashboardComponent } from './select_dashboard/select_dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { ChartsModule } from 'ng2-charts';
import { VendorpolicyComponent } from './vendorpolicy/vendorpolicy.component';
import { VendortermsComponent } from './vendorterms/vendorterms.component';
import { VendorpickupComponent } from './vendorpickup/vendorpickup.component';
import { VendorproductsComponent } from './vendorproducts/vendorproducts.component';
import { QrredeemComponent } from './qrredeem/qrredeem.component';
import { VendorcouponComponent } from './vendorcoupon/vendorcoupon.component';
import { VendortaxesComponent } from './vendortaxes/vendortaxes.component';
import { VendorcommisionsComponent } from './vendorcommisions/vendorcommisions.component';
import { VendorpaymentsComponent } from './vendorpayments/vendorpayments.component';
import { EsignatureComponent } from './esignature/esignature.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { PickupComponent } from './pickup/pickup.component';
import { InstoreComponent } from './instore/instore.component';
import { OrderrelatedComponent } from './orderrelated/orderrelated.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PreferenceComponent } from './preference/preference.component';
import { HelpComponent } from './help/help.component';
import { StoresComponent } from './stores/stores.component';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { ProductLaunchComponent } from './addproductlaunch/addproductlaunch.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    HeaderComponent,
    OnboardingComponent,
    CreatestoreComponent,
    AddstoreComponent,
    ProductsListComponent,
    ProductLaunchComponent,
    AddprodcutsComponent,
    OffersComponent,
    MarketingComponent,
    PaymentmethodsComponent,
    ChatsupportComponent,
    AddbankdetailsComponent,
    PromotionsComponent,
    CreatepromotionsComponent,
    Select_dashboardComponent,
    PosComponent,
    StoremanagamentComponent,
    NotificationComponent,
    VendorpolicyComponent,
    VendortermsComponent,
    VendorpickupComponent,
    VendorproductsComponent,
    QrredeemComponent,
    VendorcouponComponent,
    VendortaxesComponent,
    VendorcommisionsComponent,
    VendorpaymentsComponent,
    EsignatureComponent,
    CustomerordersComponent,
    PickupComponent,
    InstoreComponent,
    OrderrelatedComponent,
    EditprofileComponent,
    PreferenceComponent,
    HelpComponent,  
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
