import { AuthService } from 'src/app/_services/auth.service';
import {
  Directive,
  ViewContainerRef,
  OnInit,
  TemplateRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHasCustomerClaim]',
})
export class HasCustomerClaimDirective implements OnInit {
  @Input() appHasCustomerClaim: string;
  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userClaim = this.authService.decodedToken.given_name as string;
    if (!userClaim) {
      this.viewContainerRef.clear();
    }

    if (this.authService.memberMatch(this.appHasCustomerClaim)) {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }
}
