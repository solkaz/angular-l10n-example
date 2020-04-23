import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-directive",
  templateUrl: "./directive.component.html"
})
export class DirectiveComponent implements OnInit {
  @Input() today: number;
  @Input() timeAgo: string;
  @Input() value: number;

  ngOnInit() {}
}
