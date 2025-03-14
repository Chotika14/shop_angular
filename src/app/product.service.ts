import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
   products = [
    { id: 1, name: 'A-Chisa', imageUrl: './assets/img/fn1.png', type: 'Living Room', decript: 'เก้าอี้เหล็กเบาะผ้า  รุ่น A-Chisa แบรนด์ SB FURNITURE HIGH QUALITY FABRIC ผ้ากำมะหยี่สีน้ำเงิน ผ้านำเข้าจากต่างประเทศ นุ่มสบาย โครงขาเหล็กสีทอง หรูหรา สไตล์ Luxury',codeitem:'Brand : SB FURNITURE SKU : 19190612', price: '6,300' },
    { id: 2, name: 'Jafar', imageUrl: './assets/img/fn2.png', type: 'Dining Room', decript: 'โต๊ะกลางขาเหล็กท็อปไม้ รุ่น ซานิตี้-ซี60 ขนาด กว้าง60 x ยาว60 xสูง42 ซม. หน้าท๊อปผลิตจากไม้แท้ คุณสมบัติทนทาน, จะใช้การพ่นสี หรือ ปิดผิวด้วย Foil เพื่อความสวยงามของสินค้า ',codeitem:'Brand : SB FURNITURE SKU : 19109094', price: '5,800' },
    { id: 3, name: 'Habitat', imageUrl: './assets/img/fn3.png', type: 'Living Room' || 'Dining Room', decript: 'แสงสว่างจากแสงไฟที่ลอดออกมาจากช่องโคม ที่ดีไซน์ทันสมัย ด้วยโครงสร้างและวัสดุสามารถนำแขวนได้ทั้งภายใน หรือภายนอกได้ ตกแต่งได้อย่างสวยงาม เรียบหรู ดูแพง เหมาะกับทุกที่',codeitem:'Brand : SB FURNITURE SKU : 25028785', price: '1,500' },
    { id: 4, name: 'Blox Fit in', imageUrl: './assets/img/fn4.png', type: 'Bedroom', decript: 'Koncepet Furniture เฟอร์นิเจอร์ ชุดตู้เสื้อผ้า Blox สไตล์โมเดิร์น ขนาด 150 ซม.(W150 x D59 x H210 cm.) สีครีมลินิน ลินด์เบิร์กโอ๊ค ประกอบด้วย Body โล่ง(Op A) และ ตู้ 50 ซม.(Op F)  ',codeitem:'Brand : KONCEPT FURNITURE SKU : 59057383', price: '9,900' },
    { id: 5, name: 'Unapo', imageUrl: 'https://www.dohome.co.th/media/catalog/product/1/0/10395680_m1_1.jpg', type: 'Living Room', decript: 'โซฟาเบดผ้า ขนาด ก.135xย.101xส.85 ซม. จาก SB Design Square ดีไซน์สวย คุณภาพดีโซฟาผ้านุ่มสบายหุ้มด้วยผ้านำเข้าจากต่างประเทศให้ความรู้สึกนุ่มสบายไม่หดตัว ',codeitem:'Brand : KONCEPT FURNITURE SKU : 59057383', price: '19,900' }
  ];
  constructor() { }

  getProductById(id: number) {
    const product = this.products.find(x => x.id === id)
    // console.log("🚀 ~ ProductService ~ getProductById ~ product:", product)
    return product
  }
}
