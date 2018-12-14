import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { isUndefined } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[];
  weatherInfo: any = {};

  cityName: string = "London";

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public loading: LoadingController
  ) {
  }


  getData() {
    let load = this.loading.create();
    load.present();
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&appId=9ebe10ea68cddaa7da9a273c5ace3048").subscribe((data) => {
      this.weatherInfo = data.json();
      console.log(data.json());
      
      load.dismiss();
    }, (error) => {
      load.dismiss();
    });

    // /* a função subscribe registra os handlers ou o callback que serão executadas quando
    //   a requisição HTTP for feita (com sucesso e com erro) */
    // this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => {
    //   console.log(data.json());
    //   this.users = data.json();
    // }, (error) => {
    //   console.log(error);
    // });
  }
}
