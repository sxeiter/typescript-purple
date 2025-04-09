"use strict";
//корзина товаров
// class Product {
//     constructor(
//         public id: number,
//         public title: string,
//         public price: number
//     ) {
//     }
// }
// class Delivery {
//     constructor(
//         public date: Date
//     ) {}
// }
// class HomeDelivery extends Delivery {
//     constructor(date: Date, public adress: string) {
//         super(date)
//     }
// }
// class ShopDelivery extends Delivery {
//     constructor(public shopId: number) {
//         super(new Date)
//     }
// }
// type DeliveryOptions = HomeDelivery | ShopDelivery;
// class Cart {
//     private products: Product[] = [];
//     private delivery: DeliveryOptions
//     public addProduct(product: Product): void {
//         this.products.push(product)
//     }
//     public deleteProduct(productId: number): void {
//         this.products = this.products.filter((p: Product) => p.id !== productId)
//     }
//     public getSum(): number {
//         return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2)
//     }
//     public setDelivery(delivery: DeliveryOptions): void {
//         this.delivery = delivery;
//     }
//     public checkOut() {
//         if (this.products.length === 0) {
//             throw new Error('нет товаров в корзине')
//         }
//         if (!this.delivery) {
//             throw new Error('не указан способ доставки')
//         }
//         return {success: true}
//     }
// }
// делаем логгер
// abstract class Logger {
//     abstract log(message: string): void;
//     printDate(date: Date) {
//         this.log(date.toString());
//     }
// }
// class MyLogger extends Logger {
//     log(message: string): void {
//         console.log(message)
//     }
//     logWithDate(message: string) {
//         this.printDate(new Date());
//         this.log(message);
//     }
// }
// interface Data {
//     group: number;
//     name: string;
// }
// const data: Data[] = [
//     { group: 1, name: 'a' },
//     { group: 1, name: 'b' },
//     { group: 2, name: 'c' },
// ];
// interface IGroup<T> {
//     [key: string]: T[];
// }
// type key = string | number | symbol;
// function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
//     return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
//         const itemKey = item[key];
//         let currentEl = map[itemKey]
//         if (Array.isArray(currentEl)) {
//             currentEl.push(item)
//         } else {
//             currentEl = [item];
//         }
//         map[itemKey] = currentEl;
//         return map;
//     }, {})
// }
// const res = group<Data>(data, 'group');
// console.log(res);
function swapKeysAndValues(obj) {
    const swappedObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            swappedObject[value] = key;
        }
    }
    return swappedObject;
}
// Пример использования
const originalObject = { A: 1, B: 2 };
const swappedObject = swapKeysAndValues(originalObject);
console.log(swappedObject);
