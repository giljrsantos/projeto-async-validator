import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { UserService } from './user.service';

export class AppValidator{
    static usernameJaExiste(
        userService: UserService
    ): AsyncValidatorFn{
        return (
            control: AbstractControl
        ): Observable<ValidationErrors | null> =>{
            const username = control.value;

            return userService.get(username).pipe(
                map((response) => {
                    return response.disponivel ? null : { usernamejaexiste: username}
                })
            );
        };
    }
}