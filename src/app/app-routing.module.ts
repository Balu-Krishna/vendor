import { StoresComponent } from './stores/stores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CreatestoreComponent } from './createstore/createstore.component';
import { AddstoreComponent } from './addstore/addstore.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddprodcutsComponent } from './addprodcuts/addprodcuts.component';
import { PaymentmethodsComponent } from './paymentmethods/paymentmethods.component';
import { AddbankdetailsComponent } from './addbankdetails/addbankdetails.component';
import { OffersComponent } from './offers/offers.component';
import { CreatepromotionsComponent } from './createpromotions/createpromotions.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PosComponent } from './pos/pos.component';
import { StoremanagamentComponent } from './storemanagament/storemanagament.component';
import { NotificationComponent } from './notification/notification.component';
import { VendorpickupComponent } from './vendorpickup/vendorpickup.component';
import { VendorpolicyComponent } from './vendorpolicy/vendorpolicy.component';
import { VendortermsComponent } from './vendorterms/vendorterms.component';
import { VendortaxesComponent } from './vendortaxes/vendortaxes.component';
import { EsignatureComponent } from './esignature/esignature.component';
import { QrredeemComponent } from './qrredeem/qrredeem.component';
import { VendorcommisionsComponent } from './vendorcommisions/vendorcommisions.component';
import { VendorpaymentsComponent } from './vendorpayments/vendorpayments.component';
import { VendorproductsComponent } from './vendorproducts/vendorproducts.component';
import { VendorcouponComponent } from './vendorcoupon/vendorcoupon.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { PickupComponent } from './pickup/pickup.component';
import { InstoreComponent } from './instore/instore.component';
import { OrderrelatedComponent } from './orderrelated/orderrelated.component';
import { PreferenceComponent } from './preference/preference.component';
import { HelpcenterComponent} from './helpcenter/helpcenter.component';   
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { HelpComponent } from './help/help.component';
import { ProductLaunchComponent } from './addproductlaunch/addproductlaunch.component';
const routes: Routes = [
  {
    path:  '',
    component: DashboardComponent
  },
  {
  path:  'onboarding',
  component: OnboardingComponent
},
{
  path:'productlaunch',
  component: ProductLaunchComponent
},
{
  path:'chatsupport', 
  component:ChatsupportComponent
},
{
  path:  'create-store',
  component: CreatestoreComponent
},
{
  path:  'add-store',
  component: AddstoreComponent
},
{
  path:  'productsList',
  component: ProductsListComponent
},
{
  path:  'addProduct',
  component: AddprodcutsComponent
},
{
  path:  'payments',
  component: PaymentmethodsComponent
},
{
  path:  'add-bank-details',
  component: AddbankdetailsComponent
},
{
  path:  'offers',
  component: OffersComponent
},
{
  path:  'add-offer',
  component: CreatepromotionsComponent
},
{
  path:  'marketing',
  component: MarketingComponent
},
{
  path:  'add-promotions',
  component: PromotionsComponent
},
{
  path:  'pos',
  component: PosComponent
},
{
  path:  'store-management',
  component: StoremanagamentComponent
},
{
  path:  'notifications',
  component: NotificationComponent
},
{
  path:  'vendor-pickup',
  component: VendorpickupComponent
},
{
  path:  'vendor-policy',
  component: VendorpolicyComponent
},
{
  path:  'vendor-terms',
  component: VendortermsComponent
},
{
  path:  'vendor-taxes',
  component: VendortaxesComponent
},
{
  path:  'vendor-signature',
  component: EsignatureComponent
},
{
  path:  'vendor-qr',
  component: QrredeemComponent
},
{
  path:  'vendor-commisions',
  component: VendorcommisionsComponent
},
{
  path:  'vendor-payments',
  component: VendorpaymentsComponent
},
{
  path:  'vendor-products',
  component: VendorproductsComponent
},
{
  path:  'vendor-coupons',
  component: VendorcouponComponent
},
{
  path:  'customer-orders',
  component: CustomerordersComponent
},
{
  path:  'pick-up',
  component: PickupComponent
},
{
  path:  'in-store',
  component: InstoreComponent
},
{
  path:  'order-related',
  component: OrderrelatedComponent
},
{
  path:  'preferences',
  component: PreferenceComponent
},
{
  path:  'help-center',
  component: HelpcenterComponent
},
{
  path:  'edit-profile',
  component: EditprofileComponent
},
{
  path:  'help',
  component: HelpComponent
},
{
  path:  'stores',
  component: StoresComponent
},

];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
