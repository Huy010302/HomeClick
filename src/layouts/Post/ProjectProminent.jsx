import React from "react";
import Post from "../../components/Post/Post";
import imgProject from "../../assets/image/Project.png";

function ProjectProminent() {
  return (
    <div className="project-container">
      <Post
        title="DỰ ÁN NỔI BẬT"
        name="KHÁCH SẠN JOE'S HOUSE"
        text="Phong khách có thiết kế linh hoạt theo dạng module lắp ghép, bạn dễ dàng thay đổi được các góc đặt cũng như sắp xếp sao cho phù hợp nhất với không gian của mình. Sự nổi bật khác ngoài màu sắc của Marshmallow Sofa là các góc ghế được bo tròn tinh tế"
        imageSrc={imgProject}
        buttonText="Đến dự án"
      />
    </div>
  );
}

export default ProjectProminent;
