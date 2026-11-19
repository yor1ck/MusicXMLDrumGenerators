import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, signal ,inject} from '@angular/core';
import { TrapRequest } from './trap-model';
import { TrapForm } from "./trap-form/trap-form";
@Component({
  imports: [TrapForm],
  selector: 'app-trap-generator',
  styleUrl: './trap-generator.css',
  templateUrl: './trap-generator.html',
})
export class TrapGenerator {  private http = inject(HttpClient);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  onGeneratePreset(model: TrapRequest):void{
    this.loading.set(true);
    this.error.set(null); 
    let dataPayload : TrapRequest= {
  "fragmentBases": [
    {
      "id": 2,
      "probability": 2
    },
    {
      "id": 3,
      "probability": 2
    },
    {
      "id": 7,
      "probability": 1
    }
  ],
  "fragmentMelodies": [
    {
      "id": 1,
      "probability": 1
    },
    {
      "id": 2,
      "probability": 1
    },
    {
      "id": 3,
      "probability": 1
    },
    {
      "id": 4,
      "probability": 1
    }
  ],
  "notesProbabilities": [
    {
      "id": "39",
      "probability": 1
    },
    {
      "id": "51",
      "probability": 1
    },
    {
      "id": "42",
      "probability": 1
    }
  ],
  "beatsCount": 4,
  "measuresCount": 2,
  "patternsCount": 16,
  "title": "fills",
  "snare": "HalfTime",
  "polyrhythms": "TwoToThree",
  "noMelody": false,
  "lockedBases": [
    0,
    0,
    0,
    0,0,0,0,0
  ],
  "lockedMelodies": [
    0,
    0,
    0,
    0,0,0,0,0
  ]
};
   if(model){
      dataPayload = model;
    }
    this.http
      .post('https://localhost:7013/trap', dataPayload, {
        responseType: 'blob',      // ← тело ответа как Blob
        observe: 'response',       // ← чтобы прочитать Content-Disposition
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/xml',
        }),
      })
      .subscribe({
        next: (res) => {
          const blob = res.body!;
          const customFileName = res.headers.get('X-Pattern-Title');
          let fileName =  'default.musicxml'; 
          if (customFileName)
            {
              fileName = customFileName;
            }        
          this.saveBlob(blob, fileName);
          this.loading.set(false);
        },
        error: (err) => {
          // ВАЖНО: при responseType: 'blob' тело ошибки тоже Blob,
          // поэтому JSON-ошибку сервера нужно читать отдельно
          this.handleError(err);
          this.loading.set(false);
        },
      });
    }
  private async handleError(err: any) {
    let message = 'Не удалось скачать файл';
    const errorBlob: Blob | undefined = err?.error;

    // Сервер часто возвращает JSON-ошибку, но Angular её уже завернул в Blob
    if (errorBlob instanceof Blob) {
      try {
        const text = await errorBlob.text();
        const parsed = JSON.parse(text);
        message = parsed.message ?? message;
      } catch {
        // не JSON — оставляем дефолт
      }
    }
    this.error.set(message);
  }
  private saveBlob(blob: Blob, fileName: string) {
    // Гарантируем MIME, если сервер не отдал его
    const typed = blob.type ? blob : new Blob([blob], { type: 'application/xml' });

    const url = URL.createObjectURL(typed);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}