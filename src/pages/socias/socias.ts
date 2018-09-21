import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import { ServerProvider } from '../../providers/server/server';
import { SliderPage } from '../slider/slider';
/**
 * Generated class for the SociasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socias',
  templateUrl: 'socias.html',
})
export class SociasPage {


_socias:any;

host:any;
socia_detalle:any;
photos:any;

  constructor(public server:ServerProvider,public _servicio:ServiciosProvider,public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {


     console.log('_socia_detalle', navParams.get('_socia_detalle'));


     this.socia_detalle=navParams.get('_socia_detalle')


     this.photos=this.socia_detalle['photos']

     this.host=this.server.getMyGlobalVar()

     // this._servicio.listasocias(navParams.get('pedido'))
     //  .subscribe(data => {

     //  	console.log('listasocias',data)

     //  	this._socias =data
        
     //  })




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SociasPage');
  }


  closeModal(){


    //let datax = { 'producto': data };
    

    this.view.dismiss()


}

irslider(){

  this.navCtrl.push(SliderPage, {photos:this.photos})

}



}
