import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private element: ElementRef<HTMLParagraphElement>) {
    console.log(element.nativeElement);
  }

  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    console.log($event);

    switch ($event.key) {
      case "ArrowDown":
        this.element.nativeElement.style.backgroundColor = "green";
        break;
      case "ArrowUp":
        this.element.nativeElement.style.backgroundColor = "orange";
        break;
      case "ArrowLeft":
        this.element.nativeElement.style.backgroundColor = "blue";
        break;
      case "ArrowRight":
        this.element.nativeElement.style.backgroundColor = "red";
        break;
      default:
        return;
    }
  }
}
