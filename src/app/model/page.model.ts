import { Link } from "./link.model";
import { Paragraphe } from "./paragraphe.model";

export class Page {
  title!: string;
  links?: Link[];
  paragraphes!:Paragraphe[];
}
