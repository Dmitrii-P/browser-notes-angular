require.config({
 
     paths: {
         'domReady': '../lib/requirejs-domready/domReady',
         'angular': '../lib/angular/angular',
         'angular-route': '../lib/angular-route/angular-route'
     },
 
     shim: {
         'angular': {
             exports: 'angular'
         },
          'angular-route': {
             deps: ['angular']
         }
     },
 
     deps: ['./bootstrap']
});
