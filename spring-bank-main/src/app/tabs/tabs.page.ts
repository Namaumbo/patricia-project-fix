import { Component, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../common/services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private authenticationService: AuthenticationService,private renderer: Renderer2, private modalController: ModalController) {
    this.renderer.listen('window', 'click', (e: Event) => {
      this.onClickModalDismiss();
    })
  }

  logout(){
    this.authenticationService.logout();
    this.onClickModalDismiss();
  }
  async onClickModalDismiss(){
    const modal = await this.modalController.getTop();
    if(modal){
      modal.dismiss();
    }
  }

}
