var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./home/home.module#HomePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"login","loadChildren":"./login/login.module#LoginPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/login/login-routing.module.ts","module":"LoginPageRoutingModule","children":[{"path":"","component":"LoginPage"}],"kind":"module"}],"module":"LoginPageModule"}]},{"path":"signup","loadChildren":"./signup/signup.module#SignupPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/signup/signup-routing.module.ts","module":"SignupPageRoutingModule","children":[{"path":"","component":"SignupPage"}],"kind":"module"}],"module":"SignupPageModule"}]},{"path":"forgot-password","loadChildren":"./forgot-password/forgot-password.module#ForgotPasswordPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/forgot-password/forgot-password-routing.module.ts","module":"ForgotPasswordPageRoutingModule","children":[{"path":"","component":"ForgotPasswordPage"}],"kind":"module"}],"module":"ForgotPasswordPageModule"}]},{"path":"order","loadChildren":"./order/order.module#OrderPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/order/order-routing.module.ts","module":"OrderPageRoutingModule","children":[{"path":"","component":"OrderPage"}],"kind":"module"}],"module":"OrderPageModule"}]},{"path":"order-detail","loadChildren":"./order-detail/order-detail.module#OrderDetailPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/order-detail/order-detail-routing.module.ts","module":"OrderDetailPageRoutingModule","children":[{"path":"","component":"OrderDetailPage"}],"kind":"module"}],"module":"OrderDetailPageModule"}]}],"kind":"module"}]}
