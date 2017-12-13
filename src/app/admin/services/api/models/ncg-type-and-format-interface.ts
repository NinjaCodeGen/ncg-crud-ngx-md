import { SomeItem } from './some-item';

export interface INcgTypeAndFormat {

  // keys
  id?: number;

  // properties
  someBoolean?: boolean;
  someIntegerInt32?: number;
  someNumber?: number;
  someNumberDouble?: number;
  someString?: string;
  someStringDateTime?: string;
  someStringUid?: string;

  // nav many properties
  someArray?: Array<SomeItem>;

}
