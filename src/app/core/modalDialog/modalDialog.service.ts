import { Injectable } from '@angular/core';

@Injectable()
export class ModalDialogService {
  activate: (message?: string, title?: string) => Promise<boolean>;
}

/* NinjaCodeGen.com by DNAfor.NET */
