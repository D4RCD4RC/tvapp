import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
    query = signal('');

    history = signal<string[]>([]);

    updateQuery(value: string) {
        this.query.set(value);
        this.addToHistory(value);
    }

    addToHistory(value: string) {
        if (value.length > 3 && !this.history().includes(value)) {
            this.history.update(historial => [value, ...historial].slice(0, 10));
        }
    }

    clearHistory() {
        this.history.set([]);
    }
}