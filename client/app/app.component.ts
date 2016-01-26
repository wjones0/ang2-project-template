import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, Route1Component, Route2Component]
})
@RouteConfig([
    {
        path: '/',
        name: 'Route1',
        component: Route1Component,
        useAsDefault: true
    },
    { // PostList child route
        path: '/route2',
        name: 'Route2',
        component: Route2Component
    }

// tour of heroes examples
// //   {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
// //   {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
// //   {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent { }