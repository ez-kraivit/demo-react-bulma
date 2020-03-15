import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Content extends Component {
    render() {
        return (
            <div className="row">
                <div class="tile  is-ancestor">
                    <div class="tile is-4 is-vertical is-parent">
                        <div class="tile is-child box">
                            <p class="title is-2">My Car</p>
                            <NavLink exact to='/History'>
                                <img src="https://www.topgear.co.th/wp-content/uploads/2019/11/200-75.jpg" alt="frod" />
                            </NavLink>
                        </div>
                        <div class="tile is-child box">
                            <p><h4 class="is-size-5"><b>เข้ารับบริการครั้งต่อไป 01/01/2565</b></h4></p>
                            <br></br>
                            <div class="row">
                                <div class="columns is-mobile">
                                    <div class="column ">
                                        <span class="icon has-text-success">
                                            <i class="fas fa-car"></i>
                                        </span>
                                        Focus
                                    </div>
                                    <div class="column ">
                                        <span class="icon has-text-success">
                                            <i class="fas fa-car"></i>
                                        </span>
                                        กขค 1234
                                    </div>
                                    <div class="column ">
                                        <span class="icon has-text-success">
                                            <i class="fas fa-street-view"></i>
                                        </span>
                                        เชียงใหม่
                                    </div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column ">
                                        <span class="icon has-text-success">
                                            <i class="fas fa-palette"></i>
                                        </span>
                                        สีน้ำเงิน
                                    </div>
                                    <div class="column ">
                                        <span class="icon has-text-success">
                                            <i class="fas fa-location-arrow"></i>
                                        </span>
                                        560,000 km
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile is-child box">
                            <div class="row">
                                <p><h4 class="is-size-5"><b>เข้ารับบริการครั้งต่อไป 07/07/2562</b></h4></p>
                                <textarea class="textarea" placeholder="กรุณากรอกข้อมูล"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <p><h4 class="title"><b>Ford Everest Sport 2020</b></h4></p>
                            <div class="row">
                                <img src="https://www.topgear.co.th/wp-content/uploads/2019/11/204-41-696x285.jpg" alt="frod" />
                                <div class="columne is-mobile">
                                    <div class="column">
                                        Ford Everest 2020 ใหม่ เพิ่มรุ่นย่อย Sport ที่ถูกแทรกกลางระหว่างรุ่น Titanium และ Titanium+ เครื่องยนต์ดีเซล 2.0 ลิตรเทอร์โบ เพิ่มความสปอร์ตด้วยกระจังหน้าสีดำ, กันชนหน้า-หลังตกแต่งด้วยสีดำ, แถบคาดประตูท้ายสีดำ, ฝาครอบกระจกมองข้างสีดำ, สัญลักษณ์ EVEREST ตัวนูนบนฝากระโปรงหน้า และสัญลักษณ์ Sport บริเวณท้ายรถและประตู
                            </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="columne is-mobile">
                                    <div class="column">
                                        ภายในห้องโดยสารถูกตกแต่งแผงคอนโซลด้วยลาย Hydrographic สีน้ำเงิน ขณะที่คอนโซลหน้าและเบาะนั่งหุ้มหนังเดินตะเข็บสีน้ำเงิน อุปกรณ์มาตรฐานของรุ่น Sport ประกอบด้วย ไฟหน้า LED พร้อมไฟส่องสว่างเวลากลางวัน LED, ไฟหน้าเปิด-ปิดอัตโนมัติ, ที่ปัดน้ำฝนอัตโนมัติ, ไฟท้าย LED, ประตูท้ายไฟฟ้าแบบแฮนด์ฟรี, เบาะนั่งผู้ขับปรับไฟฟ้า 8 ทิศทาง, ระบบปรับอากาศอัตโนมัติแยกซ้าย-ขวา, ระบบสั่งงานด้วยเสียง SYNC 3 พร้อมหน้าจอ Multi-touch ขนาด 8 นิ้ว และลำโพง 9 ตำแหน่งพร้อมซับวูฟเฟอร์
                            </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
export default Content;