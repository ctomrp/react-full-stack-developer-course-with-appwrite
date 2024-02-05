import React from "react";

function Card({user, rol, content='No content yet', pic='https://images.pexels.com/photos/12796853/pexels-photo-12796853.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}) {
  return (
    <div>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src={pic}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
                {content}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div>{user}</div>
            <div>{rol}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
