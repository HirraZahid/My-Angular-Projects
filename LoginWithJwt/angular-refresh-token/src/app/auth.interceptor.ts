import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// This decorator indicates that the interceptor should be provided at the root level.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Method to intercept HTTP requests.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token'); // Retrieving the access token from localStorage.

    if (token) { // If the token exists,
      const cloned = req.clone({ // Clone the request and add the Authorization header with the token.
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(cloned); // Pass the cloned request to the next handler.
    } else {
      return next.handle(req); // If no token, pass the original request to the next handler.
    }
  }
}
