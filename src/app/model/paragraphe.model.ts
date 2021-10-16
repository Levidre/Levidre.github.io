import { ParagrapheBlock } from "./paragraphe-block.model";
import { Picture } from "./picture.model";

export class Paragraphe {
  title!: string;
  blocks!:string[];
  picture?:Picture;
}
