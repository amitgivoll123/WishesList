import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
    //root - current app, platform - all angular apps on this website, any
})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any){
        this.subject.next({eventName, payload});
    }

    listen(eventName:string, callback: (event:any) => void){
        this.subject.asObservable().subscribe((nextObj:any) => {
            if(eventName == nextObj.eventName){
                callback(nextObj.payload);
            }
        });
    }
}

//export default new EventService();