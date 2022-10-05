import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NestResponse } from "./nest-response";

@Injectable()
export class ResponseTransformationInterceptor implements NestInterceptor {
    private httpAdpter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdpter = adapterHost.httpAdapter;
    }
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
            .pipe(
                map( (controlerResponse: NestResponse) => {
                    if (controlerResponse instanceof NestResponse) {
                        const newContext = context.switchToHttp();
                        const response = newContext.getResponse();
                        const { headers, status, body } = controlerResponse;

                        const headersKeys = Object.getOwnPropertyNames(headers);

                        headersKeys.forEach( headerKey => {
                            const headerValue = headers[headerKey];
                            this.httpAdpter.setHeader(response, headerKey, headerValue);
                        });

                        this.httpAdpter.status(response, status);

                        return body;
                    }

                    return controlerResponse
                })
            );
    }
}