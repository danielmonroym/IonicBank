import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  selectedValue: any;
  constructor(private router: Router) {}

  getValue(): void {
    console.log(this.selectedValue);

    if (this.selectedValue == "Consignación") {
      this.router.navigateByUrl("/consignacion");
    } else if (this.selectedValue == "Retiro") {
      this.router.navigateByUrl("/retiro");
    } else if (this.selectedValue == "Recaudos") {
      this.router.navigateByUrl("/recaudos");
    } else if (this.selectedValue == "Traslado de efectivo") {
      this.router.navigateByUrl("/traslado");
    }
  }
}
