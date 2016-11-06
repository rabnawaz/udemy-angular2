import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        <signup-form></signup-form>
        <div>
           {{post.title}}
           <br>
           {{post.body | summary }}
        </div>
    `
    ,
    pipes:[SummaryPipe],
     directives: [SignUpFormComponent]

})
export class AppComponent {
    post = {
        title: "This angular2 excerpt pipe",
        body: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged.
        `
    }
}