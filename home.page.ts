import { Component,OnInit} from '@angular/core';
import { Router ,ActivatedRoute,NavigationExtras} from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {DialogRef, ModalComponent} from 'angular2-modal';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import {of, fromEvent} from 'rxjs';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
// export class VideoDialogContext extends BSModalContext {
//   size
//   constructor(public videoId: string) {
//     super();
//     this.size = "sm";
//   }      
// }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
 

export class HomePage implements OnInit  {
display_profile:any;
reload:any = true;
// context: VideoDialogContext;        
videoId: SafeResourceUrl;
private youtubeUrlPrefix = '//www.youtube.com/embed/';
  constructor( private storage: Storage,private router:Router,
    private nativeStorage: NativeStorage,
  
   private sanitizer: DomSanitizer) {
     this.splicing();
    // public dialog: DialogRef<VideoDialogContext>, 
    // storage.get('Bussines_Profile').then((parameter) => {

    // })
  }
  splicing(){     
var ele = Array(10,20,300,40,50);
// Object.freeze(ele);
console.log(Object.isFrozen(ele),'is forzen')
// ele.push(23);
console.log(ele.map((x,r)=>{
  [r,x]
  console.log([r,x]) 
}),'ele');  

if(Object.isFrozen(ele)){
  console.log('no updates forzen',ele); 
}else{
  ele[ele.map((x,i)=>[i,x]).filter(x=>
    
  x[1]==300


)[0][0]]=888
}


 console.log(ele,'map')
  }
  ok() {
    // this.dialog.close();
  }
  openDashboard(d){
    console.log(d,'data');
    this.router.navigateByUrl("company-dashboard");
    this.storage.set('company_info',d);
  }
  removeItmes(){
    this.reload =false;
    this.storage.keys().then((pa)=>{
      console.log(pa,'pa');
    })

    this.storage.remove('Bussines_Profile1').then((de)=>{
      console.log(de,'delete');
      this.display_profile = null;
      setTimeout(() => {
        this.reload = true;
      }, 100);
     
    })
  
  }
  ngOnInit() {
    this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix);
  }


  ionViewDidEnter(){
   this.storage.get('Bussines_Profile1').then((parameter) => {
     this.display_profile = parameter;
      console.log(parameter,'bussiness profile1');
          })

          this.nativeStorage.getItem('myitem')
          .then(
            data =>  alert(JSON.stringify(data)),
            error => console.error(error)
          );  
  }

}
