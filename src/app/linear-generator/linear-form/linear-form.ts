import { Component, output, signal } from '@angular/core';
import { initialInstrumentData, initialLinearData, LinearRequest, requestSchema } from '../linear-model';
import { form, FormField } from '@angular/forms/signals';


@Component({
  imports: [FormField],
  selector: 'app-linear-form',
  styleUrl: './linear-form.css',
  templateUrl: './linear-form.html',
})
export class LinearForm {
  linearGeneratorModel = signal<LinearRequest>(initialLinearData);
  linearGeneratorForm = form(this.linearGeneratorModel, requestSchema);
  generatePreset =output<LinearRequest>();
  onSubmit() {
      if(!this.linearGeneratorForm().invalid()) {
      this.generatePreset.emit(this.linearGeneratorModel())   
      }
  }
  onReset() {
    this.linearGeneratorModel.set(structuredClone(initialLinearData));
    this.linearGeneratorForm().reset();
  }
   addInstrument() {
    this.linearGeneratorModel.update(preset => ({
      ...preset,
      Instruments: [...preset.Instruments, { ...initialInstrumentData }]
    }));
  }
   removeInstrument(index: number) {
    this.linearGeneratorModel.update(preset => ({
      ...preset,
      Instruments: preset.Instruments.filter((_, i) => i !== index)
    }));
  }
}
