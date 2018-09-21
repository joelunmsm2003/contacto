import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { User } from '../../providers/perfil/user';
import { ServerProvider } from '../../providers/server/server';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers:[ServerProvider]
})
export class PerfilPage {

 	nombre: any;
 	email: any;
 	telefono:any;
  photo:any;
  perfil:User[];
  user_grupo:any;
  correo:any;
  photo_facebook:any;
  cliente:any={};
  codigo:any;

  host:any;
  myphoto:any;

  constructor( private transfer: FileTransfer, private file: File, private filePath: FilePath, private camera: Camera,public server: ServerProvider,public navCtrl: NavController,private _perfil: PerfilProvider, public navParams: NavParams) {


       this.host=this.server.getMyGlobalVar()

      this._perfil.miperfil()
      .subscribe(data => {

          this.email=data[0]['email']
          this.telefono=data[0]['telefono']
          this.photo=data[0]['photo']
          this.photo_facebook=data[0]['photo_facebook']
          this.user_grupo=data[0]['user__groups__name']
          this.nombre=data[0]['nombre']
          this.correo=data[0]['email']
          this.telefono=data[0]['telefono']
          this.codigo=data[0]['codigo_recibido']

      })

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }



subir(photo){


alert('subiendo photo')
// let loader=this.loadingCtrl.create({

//   content:"Uploading..."
// })

//loader.present()


const fileTransfer: FileTransferObject = this.transfer.create();


var random = Math.floor(Math.random()*100);


  let options: FileUploadOptions = {
     fileKey: 'photo',
     fileName: 'myImage_'+photo.id+'_mascojudo.jpg',
     chunkedMode:false,
     httpMethod:'post',
     mimeType:"image/jpeg",
     headers: {}
   
  }

  alert('Enviando photo a Server')

  alert(photo.photoURL)

  fileTransfer.upload(photo.photoURL, 'http://138.68.230.137:8000/subirfoto', options)
   .then((data) => {


     alert('Exito')
     

     //loader.dismiss();

     // success
   }, (err) => {
     // error

     //alert(err)

     console.log(err)

     //loader.dismiss();
   })


}


  actualiza(nombre,email,telefono,codigo){
 

    this.cliente.nombre=nombre
    this.cliente.email=email
    this.cliente.telefono=telefono
    this.cliente.codigo=codigo

    this._perfil.actualiza(this.cliente)
      .subscribe(data => {

        console.log(data)


      })


      this.subir(this.myphoto)








  }





  fotolibreria(){





const options: CameraOptions = {
  // quality: 70,
  // destinationType: this.camera.DestinationType.FILE_URI,
  // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  // encodingType: this.camera.EncodingType.JPEG,
  // saveToPhotoAlbum: true,
  // allowEdit:true,
  // targetWidth:300,
  // targetHeight:300
    sourceType: 1, // camera
    destinationType: 1, // file uri
    correctOrientation: true,
    saveToPhotoAlbum: true,
    encodingType: 0, // jpeg
    allowEdit:true,
    targetWidth:300,
    targetHeight:300
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):

 alert('Cogi la imagne')
 this.myphoto = 'data:image/jpeg;base64,' + imageData;

 const fileTransfer: FileTransferObject = this.transfer.create();


var random = Math.floor(Math.random()*100);


  let options: FileUploadOptions = {
     fileKey: 'photo',
     fileName: 'myImage_'+this.myphoto.id+'_mascojudo.jpg',
     chunkedMode:false,
     httpMethod:'post',
     mimeType:"image/jpeg",
     headers: {}
   
  }

  alert('Enviando photo a Server')

  alert(this.myphoto.photoURL)

  fileTransfer.upload(this.myphoto.photoURL, 'http://138.68.230.137:8000/subirfoto', options)
   .then((data) => {


     alert('Exito')
     

     //loader.dismiss();

     // success
   }, (err) => {
     // error

     //alert(err)

     console.log(err)

     //loader.dismiss();
   })

  
}, (err) => {
 
   alert(err)
});


}








}
