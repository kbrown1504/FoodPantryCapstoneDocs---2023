'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">userApp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b7fcbd7c7404a276822e73c203149aaaec3ffd581dc22e8c9c1d9f61cde6cab04dc56d277af63a56856d727ecf7d41259dbeb2895bf650bbd967bc7a29555d57"' : 'data-target="#xs-components-links-module-AppModule-b7fcbd7c7404a276822e73c203149aaaec3ffd581dc22e8c9c1d9f61cde6cab04dc56d277af63a56856d727ecf7d41259dbeb2895bf650bbd967bc7a29555d57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b7fcbd7c7404a276822e73c203149aaaec3ffd581dc22e8c9c1d9f61cde6cab04dc56d277af63a56856d727ecf7d41259dbeb2895bf650bbd967bc7a29555d57"' :
                                            'id="xs-components-links-module-AppModule-b7fcbd7c7404a276822e73c203149aaaec3ffd581dc22e8c9c1d9f61cde6cab04dc56d277af63a56856d727ecf7d41259dbeb2895bf650bbd967bc7a29555d57"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link" >ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageRoutingModule.html" data-type="entity-link" >ForgotPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-1c3652f7c5a7607efa31d921fe042292bc064f8aef4ed560ac2ffbcdbe23b4afd2d7c142bef5f106754d26b9460726027d118e414f6bc72f0a7895c901fa4d40"' : 'data-target="#xs-components-links-module-LoginPageModule-1c3652f7c5a7607efa31d921fe042292bc064f8aef4ed560ac2ffbcdbe23b4afd2d7c142bef5f106754d26b9460726027d118e414f6bc72f0a7895c901fa4d40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-1c3652f7c5a7607efa31d921fe042292bc064f8aef4ed560ac2ffbcdbe23b4afd2d7c142bef5f106754d26b9460726027d118e414f6bc72f0a7895c901fa4d40"' :
                                            'id="xs-components-links-module-LoginPageModule-1c3652f7c5a7607efa31d921fe042292bc064f8aef4ed560ac2ffbcdbe23b4afd2d7c142bef5f106754d26b9460726027d118e414f6bc72f0a7895c901fa4d40"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderDetailPageModule.html" data-type="entity-link" >OrderDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderDetailPageModule-ebbed435e105d2e33915a87168ba5c4aed380151a7bf0a9849c5bbad4b82e032ea910281f90f7ec9e01977334c1a6e01ec5dd80aebdca5b346f74116dc25cc27"' : 'data-target="#xs-components-links-module-OrderDetailPageModule-ebbed435e105d2e33915a87168ba5c4aed380151a7bf0a9849c5bbad4b82e032ea910281f90f7ec9e01977334c1a6e01ec5dd80aebdca5b346f74116dc25cc27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderDetailPageModule-ebbed435e105d2e33915a87168ba5c4aed380151a7bf0a9849c5bbad4b82e032ea910281f90f7ec9e01977334c1a6e01ec5dd80aebdca5b346f74116dc25cc27"' :
                                            'id="xs-components-links-module-OrderDetailPageModule-ebbed435e105d2e33915a87168ba5c4aed380151a7bf0a9849c5bbad4b82e032ea910281f90f7ec9e01977334c1a6e01ec5dd80aebdca5b346f74116dc25cc27"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderDetailPageRoutingModule.html" data-type="entity-link" >OrderDetailPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderPageModule.html" data-type="entity-link" >OrderPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderPageModule-2a816373bd2321b590a852c87975350fd4d8e0a9a15036b2fa5fe5926ded1d8f44de52d57bb7f238b8093363e85c5815d8817cb1b84860ab5dba99837e4348ab"' : 'data-target="#xs-components-links-module-OrderPageModule-2a816373bd2321b590a852c87975350fd4d8e0a9a15036b2fa5fe5926ded1d8f44de52d57bb7f238b8093363e85c5815d8817cb1b84860ab5dba99837e4348ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderPageModule-2a816373bd2321b590a852c87975350fd4d8e0a9a15036b2fa5fe5926ded1d8f44de52d57bb7f238b8093363e85c5815d8817cb1b84860ab5dba99837e4348ab"' :
                                            'id="xs-components-links-module-OrderPageModule-2a816373bd2321b590a852c87975350fd4d8e0a9a15036b2fa5fe5926ded1d8f44de52d57bb7f238b8093363e85c5815d8817cb1b84860ab5dba99837e4348ab"' }>
                                            <li class="link">
                                                <a href="components/OrderPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderPageRoutingModule.html" data-type="entity-link" >OrderPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageModule.html" data-type="entity-link" >SignupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' : 'data-target="#xs-components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' :
                                            'id="xs-components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' }>
                                            <li class="link">
                                                <a href="components/SignupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageRoutingModule.html" data-type="entity-link" >SignupPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link" >FirebaseService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});