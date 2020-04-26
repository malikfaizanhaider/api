import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api';
  showConfig = true;
  password = '';
  length = 0;
  includeLetters = false;
  includeNUmbers = false;
  includeSymbols = false;

  constructor() {
  }

  toggleConfig() {
    this.showConfig = !this.showConfig;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUserLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNUmbers = !this.includeNUmbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onBUttonCLick() {
    const numbers = '1234567890';
    const letters = 'abcdefghiklmnopqstuvwxyz';
    const symbols = '~!@#$%^&*()_+';

    let validChars = '';

    if (this.includeNUmbers) {
      validChars += numbers;
    }

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
  }

}
