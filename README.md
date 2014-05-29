ionicDynamicRouting
===================

Sample of using Ionic tabs with dynamic routing.

The names and quantity of the tabs are unknown until retrieved from a service.

#Issues
- Why is the initial "blank" route required?  If it is removed, the tabs will not initialize
- How can this be done without using the `app` global variable?
- Using interpolated `ion-nav-view` that is not currently supported by Ionic.  See :
 - https://github.com/driftyco/ionic/pull/1526
 - https://github.com/driftyco/ionic/issues/1503
