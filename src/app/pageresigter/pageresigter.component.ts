import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageresigter',
  templateUrl: './pageresigter.component.html',
  styleUrls: ['./pageresigter.component.scss']
})
export class PageresigterComponent {
  
  nextStepClicked: boolean = false; // ตัวแปรเพื่อตรวจสอบว่าปุ่ม Next ถูกคลิกหรือไม่
  addressStep: boolean = false; // ตัวแปรเพื่อตรวจสอบว่าเข้าสู่สเตปต่อไปที่ต้องกรอกที่อยู่หรือไม่
  formData: any = {}; // ตัวแปรเพื่อเก็บข้อมูลฟอร์ม

  constructor(private router: Router) {}

  nextStep() {
    if (!this.nextStepClicked) {
      // ถ้ายังไม่ได้คลิก Next ให้เปลี่ยนเป็นสเตปต่อไปที่ต้องกรอกที่อยู่
      this.addressStep = true;
      this.nextStepClicked = true; // ตั้งค่าว่าปุ่ม Next ถูกคลิกแล้ว
    } else {
      // ถ้าคลิก Next แล้วให้นำทางไปยังสเตปต่อไป
      this.router.navigate(['/next-step'], { state: { formData: this.formData } });
    }
  }
}
