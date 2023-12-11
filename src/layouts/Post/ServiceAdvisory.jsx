//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design layout Dịch vụ tư vấn>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 04/12/2023: viết Post - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import Post from "../../components/Post/Post";
import imgService from "../../assets/image/Service.png"


function ServiceAdvisory() {
    return (
        <div className="service-container">
            <Post
                title="DỊCH VỤ TƯ VẤN"
                name="THIẾT KẾ"
                text="Phong khách có thiết kế linh hoạt theo dạng module lắp ghép, bạn dễ dàng thay đổi được các góc đặt cũng như sắp xếp sao cho cho phù hợp nhất với không gian của mình. Sự nổi bật khác ngoài màu sắc của Marshmallow Sofa là các góc ghế được bo tròn tinh tế"
                imageSrc={imgService}
                buttonText="Xem thêm"
            />

        </div>
    )
}

export default ServiceAdvisory;
