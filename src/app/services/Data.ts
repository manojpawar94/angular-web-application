import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
})
export class Data {

    public storage: Product;

    public constructor() { }

}