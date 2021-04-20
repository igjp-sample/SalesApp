import { Component } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component {

    visibleStates = [
    false, false, false, false, false, false, false, false
  ]

  questions = [
    "製品評価の背景",
    "プロジェクト概要",
    "評価対象",
    "評価期間",
    "カウンターパート、決裁者",
    "開発規模（予算・開発者数）",
    "競合",
    "IG認知"
  ]

  text1:string;
  text2:string;
  text3:string;
  text4:string;
  text5:string;
  text6:string;
  text7:string;
  text8:string;

  text = [
    {val:""},{val:""},{val:""},{val:""},{val:""},{val:""},{val:""},{val:""}
  ]

  copyToClipboard() {
    var val:string = "";
    this.visibleStates.forEach((state, index) => {
      if (state) {
        val += `[${this.questions[index]}]\n`;
        val += this.text[index].val.trim() + "\n\n";
      }
    })
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
