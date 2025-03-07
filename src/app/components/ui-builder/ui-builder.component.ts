import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ui-builder',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './ui-builder.component.html',
  styleUrls: ['./ui-builder.component.scss']
})
export class UiBuilderComponent {
  availableComponents = [
    { name: 'Button', tag: 'button', code: '<button class="btn">Click Me</button>' },
    { name: 'Input', tag: 'input', code: '<input type="text" class="input">' },
    { name: 'Card', tag: 'div', code: '<div class="card">Card Content</div>' }
  ];

  droppedComponents: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      // Create a new instance instead of moving
      const copiedComponent = { ...event.previousContainer.data[event.previousIndex] };
      this.droppedComponents.splice(event.currentIndex, 0, copiedComponent);
    }
  }
}
