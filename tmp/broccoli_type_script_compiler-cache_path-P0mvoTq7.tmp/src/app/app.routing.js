"use strict";
var router_1 = require('@angular/router');
var view_list_1 = require('./view/view-list');
var about_view_1 = require('./view/about-view');
var login_view_1 = require('./view/login-view');
var personal_info_view_1 = require('./view/personal-info-view');
var topic_view_1 = require('./view/topic-view');
var topic_new_view_1 = require('./view/topic-new-view');
var message_view_1 = require('./view/message-view');
var appRoutes = [
    {
        path: '',
        redirectTo: '/list/all',
        pathMatch: 'full'
    },
    {
        path: 'list/:tab',
        component: view_list_1.ViewListComponent
    },
    {
        path: 'topic/:id',
        component: topic_view_1.TopicViewComponent
    },
    {
        path: 'message',
        component: message_view_1.MessageViewComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: about_view_1.AboutViewComponent
    },
    {
        path: 'perinfo/:loginname',
        component: personal_info_view_1.PersonalInfoViewComponent
    },
    {
        path: 'login',
        pathMatch: 'prefix',
        component: login_view_1.LoginViewComponent
    },
    {
        path: 'newtopic',
        pathMatch: 'prefix',
        component: topic_new_view_1.TopicNewViewComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map