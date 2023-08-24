import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../models/message.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private messageService: MessageService) {}

  onSubmit() {
    const message: Message = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };
      this.messageService.sendEmail(message).subscribe((response: any) => {
        console.log('Mensagem enviada com sucesso!', response);
      }, error => {
        console.error('Erro ao enviar mensagem', error);
      });
  }
}
