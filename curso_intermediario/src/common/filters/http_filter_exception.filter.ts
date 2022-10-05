import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

@Catch()
export class HttpFilterException implements ExceptionFilter{
    private httpAdpter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdpter = adapterHost.httpAdapter;
    }

    catch(exception: Error, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();

        const { status, body } = exception instanceof HttpException
            ? {
                status: exception.getStatus(),
                body: exception.getResponse()
            } 
            : {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toString(),
                    message: exception.message,
                    path: request.path
                }
            }; 
        
        this.httpAdpter.reply(response, body, status);    
    }

}