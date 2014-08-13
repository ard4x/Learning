'use strict';

/**
 * @ngdoc overview
 * @name learnApp
 * @description
 * # learnApp
 *
 * Main module of the application.
 */


(function(){
    var app = angular.module('blog', []);

    app.directive('blogPost', function(){
        return {
          restrict: 'E',
          templateUrl: 'templates/post.html'
        };
    });

    app.directive('popUp', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/popup.html'
        };
    });

    app.controller('BlogCtrl', function(){
        this.items = posts;

        this.isPopupShown = false;

        this.newPost = {};

        this.addPost = function () {
            this.newPost.labels = this.newPost.labels ? this.newPost.labels.split(',') : '';
            this.newPost.date = new Date();
            this.items.push(this.newPost);
            this.newPost = {};
            this.isPopupShown = false;
        };

        this.popupAction = function(action){
            switch (action) {
             case 'show':
                 this.isPopupShown = true;
             break;
             case 'hide':
                 this.isPopupShown = false;
             break;
             default :
             return this.isPopupShown;
             }
        };
    });

    var posts = [
        {
            'author': 'First Author',
            'avatar': 'img/common/tilo-avatar.png',
            'image': '',
            'title': 'First Article title',
            'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nibh rhoncus eleifend varius, dui dui sodales diam, et tincidunt felis dolor nec est. Fusce posuere diam ipsum, et rhoncus nisi molestie a. Maecenas sed laoreet nisi. Fusce volutpat blandit suscipit. Duis ornare elit purus, vitae suscipit sapien mollis rutrum. Donec eros turpis, aliquet quis tempus volutpat, blandit at mi. Fusce bibendum ullamcorper lacus, sed lacinia leo facilisis id. Pellentesque placerat ipsum et sapien placerat vehicula. Nunc aliquam, elit vitae interdum ullamcorper, nunc purus ornare purus, in vehicula risus turpis id nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam a ipsum sed dolor fermentum convallis. Vestibulum et dictum massa. Mauris sit amet turpis quis diam congue placerat sit amet nec enim. Quisque lacinia suscipit nisi, ac adipiscing nunc hendrerit a. Quisque gravida erat mattis gravida varius. Donec eu justo vel erat vulputate tristique nec id odio.',
            'date': '',
            'labels': ['CSS', 'JavaScript', 'HTML']
        },

        {
            'author': 'Administrator',
            'avatar': 'img/common/reid-avatar.png',
            'image': '',
            'title': 'Second blog article title',
            'body': 'Fusce ultrices, tortor in pulvinar congue, neque nisl pellentesque massa, et porttitor erat massa ac nulla. Cras bibendum est vel sapien lobortis, id accumsan nulla pretium. Nam iaculis suscipit orci, nec vulputate dolor. Integer arcu lorem, interdum non ultrices non, malesuada non nibh. Donec vulputate sollicitudin rutrum. Nam id molestie enim, vitae volutpat sem. Vivamus adipiscing pharetra nunc, non aliquam nisi. Mauris sed ipsum sit amet purus accumsan gravida.',
            'date': '',
            'labels': ['Lorem ipsum...', 'HTML']
        },

        {
            'author': 'Second Author',
            'avatar': 'img/common/ericf-avatar.png',
            'image': '',
            'title': 'Third title',
            'body': 'Fusce vehicula mollis nisi, et vestibulum nibh hendrerit eu. In cursus semper magna a dignissim. Nam vestibulum est non gravida vulputate. Aliquam malesuada placerat urna, non semper orci sollicitudin et. Ut pharetra lacinia urna, nec ultricies risus eleifend non. Nulla quis hendrerit velit, vel laoreet urna. Aenean odio nisl, luctus dignissim nunc vitae, tempor feugiat felis. Sed facilisis sit amet tortor sed vestibulum. Nam vel leo ut libero suscipit consectetur quis eu neque. Sed auctor nulla at tortor gravida, ac cursus massa iaculis. Suspendisse condimentum ante eu tincidunt eleifend. Nunc suscipit mollis neque, a ornare mauris cursus et.',
            'date': '212121234234',
            'labels': ['JavaScript']
        }
    ];

})();
