import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService = inject(MessageService);

  /**
   * The function "success" adds a success message to the message service with the provided message.
   * @param {string} message - The `message` parameter in the `success` function is a string that
   * represents the specific message or information you want to display when a success notification is
   * triggered. This message will be shown as the detail in the success notification.
   */
  success(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Proceso exitoso',
      detail: message,
    });
  }

  /**
   * The `info` function in TypeScript adds an info message to the message service with the provided
   * message.
   * @param {string} message - The `message` parameter in the `info` function is a string that
   * represents the information message that you want to display. This message will be shown to the
   * user as part of an information notification with a severity level of 'info'.
   */
  info(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }

  /**
   * The `warn` function in TypeScript adds a warning message to the message service with the specified
   * message.
   * @param {string} message - The `message` parameter is a string that contains the warning message to
   * be displayed to the user.
   */
  warn(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }

  /**
   * The error function in TypeScript adds an error message to the message service with severity,
   * summary, and detail.
   * @param {string} message - The `message` parameter in the `error` function is a string that
   * represents the error message to be displayed. This message will be shown to the user as the detail
   * of the error notification with severity set to 'error' and summary as 'Error'.
   */
  error(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  /**
   * The `contrast` function in TypeScript adds an error message with a specified severity level to the
   * message service.
   * @param {string} message - The `contrast` function takes a `message` parameter, which is a string
   * containing the error message to be displayed. This function adds an error message to the message
   * service with severity set to 'contrast', summary set to 'Error', and detail set to the provided
   * `message`.
   */
  contrast(message: string) {
    this.messageService.add({
      severity: 'contrast',
      summary: 'Error',
      detail: message,
    });
  }

  /**
   * The `secondary` function in TypeScript adds a secondary message with the specified content to the
   * message service.
   * @param {string} message - The `secondary` function takes a `message` parameter, which is a string
   * containing the message to be displayed as the detail in the notification.
   */
  secondary(message: string) {
    this.messageService.add({
      severity: 'secondary',
      summary: 'Secondary',
      detail: message,
    });
  }
}
