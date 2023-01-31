import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-icon',
  templateUrl: './file-icon.component.html',
  styleUrls: ['./file-icon.component.css']
})

export class FileIconComponent implements OnInit {

  @Input() fileType : string | undefined = ""


  getFileEnding(fileName: string) {
    if (fileName == undefined) {
      return
    }

    if(fileName.endsWith('.pdf')) {
      this.fileType = "pdf"
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
