export class A {
    title:string;
    codel:number;
}

export class B extends A {
    description:string;
}

export class C {
    model:B = new B();
    save(){
        this.model.title = "Test for extends";
    }
}