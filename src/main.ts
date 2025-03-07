import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UiBuilderComponent } from './app/components/ui-builder/ui-builder.component';

bootstrapApplication(UiBuilderComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(DragDropModule)
  ]
}).catch(err => console.error(err));
