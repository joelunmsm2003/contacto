import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

	photos:any;
	host:any;

  constructor(private view:ViewController,public server:ServerProvider,public navCtrl: NavController, public navParams: NavParams) {


   this.photos=navParams.get('photos')

   console.log('jsjsj',this.photos)
   this.host=this.server.getMyGlobalVar()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }



  closeModal(){


    //let datax = { 'producto': data };
    

    this.view.dismiss()


}

}
