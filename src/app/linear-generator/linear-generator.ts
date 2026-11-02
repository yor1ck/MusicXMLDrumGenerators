import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, signal ,inject} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-linear-generator',
  styleUrl: './linear-generator.css',
  templateUrl: './linear-generator.html',
})
export class LinearGenerator {
    private http = inject(HttpClient);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  download() {
    this.loading.set(true);
    this.error.set(null);

    const dataPayload = {
    Title:"MyTestTitle",
    MeasuresCount:64,
    Beats:4,
    BeatType:"Quarter",
    NotesType:"Sixteenth",
    SpecialSnare:"HalfTime",
    StickingType:"None",
    ShowStickings:false,
    EnableHandRestrictions:false,
    EnableMeasureLimits:true,
    Instruments:[
        {
            Id: 37,
            HasLimit: false,
            Limit: 0,
            Probability: 1,
            AccentProbability: 0,
            IsStarting:true
        },
        {
            Id: 39,
            HasLimit: false,
            Limit: 0,
            Probability: 1,
            AccentProbability: 0
        }
    ]
};

    this.http
      .post('/api/export/xml', dataPayload, {
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
          const filename =  'export.musicxml';
          this.saveBlob(blob, filename);
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
  private saveBlob(blob: Blob, filename: string) {
    // Гарантируем MIME, если сервер не отдал его
    const typed = blob.type ? blob : new Blob([blob], { type: 'application/xml' });

    const url = URL.createObjectURL(typed);
    const a = document.createElement('a');
    a.href = url;
    a.download = "TestMusicxml.musicxml";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}


