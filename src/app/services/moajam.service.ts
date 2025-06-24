import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RootNounResponse, RootResponse, RootVerbResponse } from '../models/root-response.model';
import { WordEraResponse, WordMeaningResponse, WordSentenceResponse } from '../models/word-response';

@Injectable({ providedIn: 'root' })
export class MoajamService{

  public  APIUrl =  "https://almojam.org/api/";

  constructor(protected http: HttpClient) {
 }

    getRoot(root : string):Observable<RootResponse> {
    
      return this.http.get<RootResponse>(`${this.APIUrl}root/${root}`)
        .pipe(
            catchError(this.handleError)
        );
        
    }
    getRootNoun(root : string):Observable<RootNounResponse> {
    
      return this.http.get<RootNounResponse>(`${this.APIUrl}root/${root}/nouns`)
        .pipe(
            catchError(this.handleError)
        );
    }
     getRootVerb(root : string):Observable<RootVerbResponse> {
    
      return this.http.get<RootVerbResponse>(`${this.APIUrl}root/${root}/verbs`)
        .pipe(
            catchError(this.handleError)
        );
    }
     getRootInformation(root : string):Observable<any> {
    
      return this.http.get<any>(`${this.APIUrl}root/${root}/general-info`)
        .pipe(
            catchError(this.handleError)
        );
    }

     getWordMeaning(word : string):Observable<WordMeaningResponse> {
    
      return this.http.get<WordMeaningResponse>(`${this.APIUrl}word/${word}/meanings`)
        .pipe(
            catchError(this.handleError)
        );
    }
     getWordSentence(word : string):Observable<WordSentenceResponse> {
    
      return this.http.get<WordSentenceResponse>(`${this.APIUrl}word/${word}/sentences`)
        .pipe(
            catchError(this.handleError)
        );
    }
    getWordCitations(word : string,era: string):Observable<WordEraResponse> {
    
      return this.http.get<WordEraResponse>(`${this.APIUrl}word/${word}/citations?era=${era}`)
        .pipe(
            catchError(this.handleError)
        );
    }




     protected handleError(error:any) {
      return throwError(error);
  }

}