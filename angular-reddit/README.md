> header component
> auth/signup component
> auth/login component

 >> shared component to make backend calls to spring boot api.
  signup/login calls done.

//todo: attach images. 

### Notes

```
  this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('username', data.username);
      this.localStorage.store('refreshToken', data.refreshToken);
      this.localStorage.store('expiresAt', data.expiresAt);
```

local storage of login response.
    npm install --save ngx-webstorage

npm install --save ngx-toastr
    
every request coming from the client after login will be required to have the jwt. 
this can be done by http interceptor. 


> cool resource on debugging in vscode for angular.
https://www.c-sharpcorner.com/article/debug-angular-in-vs-code/