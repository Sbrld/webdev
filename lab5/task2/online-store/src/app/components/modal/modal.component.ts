import {Component,signal,  input, output} from "@angular/core";
import {CommonModule} from "@angular/common";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-modal',
  standalone : true,
  template: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  product = input.required<Product>();
  isOpen = input<boolean>(false);

  closeModal = output<void>();

  onClose() {
    this.closeModal.emit();
  }

  onBackdropClick() {
    this.closeModal.emit();
  }
}
