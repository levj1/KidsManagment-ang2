import { Component } from '@angular/core';

@Component({
    selector: "el-app",
    templateUrl: "app/enfants/enfant-list.component.html"
})
export class EnfantListComponent{
    pageTitle: string = "Kids Care Management";
    showImage: boolean = false;
    listFilter: string = 'cart';
    arrEnf: Enfant[] = [new Enfant('ame',5,'classA')];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }



    enfants: any[] =
    [
        {
		"enfantId"   : 1,
		"enfantName" : "Dine Plus",
		"enfantAge"  : 3,
		"pictureUrl" : "https://cdn0.iconfinder.com/data/icons/family-faces/523/people-face-avatar-man-woman-person-girl-boy-kid_59-256.png"
        },
        {
            "enfantId" : 2,
            "enfantName" : "Olive Oil",
            "enfantAge" : 5,
            "pictureUrl" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2CAw61fVws7Kyr0c-O-zB5Z7sFJfFwHgF4zwQ4FDAt4z4hw62"
        },
        {
            "enfantId" : 3,
            "enfantName" : "Obed One",
            "enfantAge" : 7,
            "pictureUrl" : "https://image.shutterstock.com/z/stock-vector-kid-boy-avatar-head-person-icon-isolated-and-flat-illustration-vector-graphic-463759433.jpg"
        },
        {
            "enfantId" : 4,
            "enfantName" : "Rapid feast",
            "enfantAge" : 2,
            "pictureUrl" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2CAw61fVws7Kyr0c-O-zB5Z7sFJfFwHgF4zwQ4FDAt4z4hw62"
        }
    ];
    
}


export class ClassRoom{
    name: ClassRoomName;
}

enum ClassRoomName{
    KidsInMotion,
    GraciousGod,
    PracticeLove
}

export class Enfant{
    enfantId: number;
    enfantName: string;
    enfantAge: number;
    pictureUrl: string;
    enfantClassRoom: string;
    
    constructor(name: string, age: number, room: string){
        this.enfantName = name;
        this.enfantAge = age;
        this.enfantClassRoom = room;
    }
}