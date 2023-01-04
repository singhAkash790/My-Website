import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-8">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-blue-500">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            quod! Quo expedita ea labore quidem beatae nostrum, laborum
            deserunt? Quis asperiores consectetur quisquam ipsam, amet cumque?
            Velit cupiditate corrupti vitae. loerm75
            {/* Adding time line wise data all traning  */}
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            necessitatibus deserunt? Quaerat laboriosam tempora quia voluptatem
            ipsa sapiente alias eaque iure unde dolore, quis est distinctio
            pariatur debitis molestiae optio. Cumque voluptate iusto et,
            assumenda corrupti earum nisi nesciunt, laudantium eligendi fugit
            illum. Similique, consequatur quo voluptatem magnam accusamus at!
          </p>
          <p className="underline cursor-pointer text-grey-500">
            Check out some of my latest projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
