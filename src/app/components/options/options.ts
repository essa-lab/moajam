import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import options from './options.json'; 
import { Option } from './options.model';

const stageMapping : { [key: string]: string[] } = {
  "getRoot":[
    "common"
  ],
  "getVerbs":[
    "word",
  ],
  "getNouns":[
    "word",
  ],
  "getGeneralInfo":[
    "root_follow_up",
  ],
  "getHistorical":[
    "historical"
  ],
  "getBackToRoot":[
    "root_follow_up"
  ],
  "getEra":[
    "word"
  ],
  // put conditions on getFAQ and all the common options
  // chack it and display the options based on the current state of the root
  "getFAQ":[
    ""
  ]
}

@Component({
  selector: 'app-options',
  templateUrl: './options.html',
    imports:[CommonModule,FormsModule]

})
export class OptionsComponent implements OnInit {
  
  @Output() selectOption = new EventEmitter<string>();
  // option: string = '';
  options: any = options;
  stage: string = 'root_follow_up';

 constructor() {
 }


   ngOnInit(): void {
        // console.log(this.options);

  }

  select(option :Option) {
    this.stage = stageMapping[option.action][0]

    if (option.action.trim()) {
      this.selectOption.emit(option.action.trim());
      // this.option = '';
    }
  }
  objectToArray(obj: any): any[] {
  return Object.keys(obj).map(key => obj[key]);
}

}
