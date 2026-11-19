import { Component, output, signal } from '@angular/core';
import { initialTrapData, initialTrapInstrumentData, TrapRequest } from '../trap-model';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-trap-form',
  styleUrl: './trap-form.css',
  templateUrl: './trap-form.html',
})
export class TrapForm {
  trapGeneratorModel = signal<TrapRequest>(initialTrapData);
  trapGeneratorForm = form(this.trapGeneratorModel);
  generatePreset =output<TrapRequest>();
  onSubmit() {
      if(!this.trapGeneratorForm().invalid()) {
      this.generatePreset.emit(this.trapGeneratorModel())   
      }
  }
  onReset() {
    this.trapGeneratorModel.set(structuredClone(initialTrapData));
    this.trapGeneratorForm().reset();
  }
   addInstrument() {
    this.trapGeneratorModel.update(preset => ({
      ...preset,
      notesProbabilities: [{ ...initialTrapInstrumentData }, ...preset.notesProbabilities ]
    }));
  }
   removeInstrument(index: number) {
    this.trapGeneratorModel.update(preset => ({
      ...preset,
      notesProbabilities: preset.notesProbabilities.filter((_, i) => i !== index)
    }));
  }}
