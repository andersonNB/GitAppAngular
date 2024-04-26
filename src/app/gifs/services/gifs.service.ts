import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'NSNuc0npTWHQyfPwgPnb6zcMqWfNBUvT';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient ) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    this.organizeHistory(tag);
    console.log(this._tagsHistory);


    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',tag);


    // una forma de hacerlo
    // this.http.get(`${this.serviceUrl}/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    // .subscribe((response:any)=>{
    //   console.log(response)
    // })
  
    // Segunda forma de hacer una petición y esta vez pasandole los params
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params} )
    .subscribe((response)=>{
      
      this.gifList = response.data;
      console.log(this.gifList);

    })

  }
}
