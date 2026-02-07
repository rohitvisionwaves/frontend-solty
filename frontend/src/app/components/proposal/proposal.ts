import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.html',
  styleUrls: ['./proposal.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProposalComponent {
  response: string | null = null;
  mailMsg: string = "";

  /** Records the user's response (yes or no) and sets the email body accordingly. */
  respond(answer: 'yes' | 'no') {
    if (answer === 'yes') {
      this.response = 'yes';
      this.mailMsg = "She said YES! ❤️";
    } else {
      this.response = 'no';
      this.mailMsg = "She wants to stay best friends. 🙂";
    }
  }

  /** Returns a mailto link with subject and body pre-filled for the proposal response. */
  getMailLink() {
    const subject = encodeURIComponent("Valentine Proposal Response");
    const body = encodeURIComponent(this.mailMsg);
    return `rohitmahajan09006@gmail.com?subject=${subject}&body=${body}`;
  }
}
