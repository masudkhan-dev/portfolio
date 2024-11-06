const Service = () => {
  const items = [
    {
      id: 1,
      title: "PSD to HTML Conversion",
      description:
        "It's a process to convert your PSD files to HTML5 web pages",
    },
    {
      id: 2,
      title: "Figma to HTML Conversion",
      description:
        "It's a process to convert your Figma files to HTML5 web pages as like PSD to html",
    },
    {
      id: 3,
      title: "Image to HTML Conversion",
      description:
        "It's a process to convert your Image files to HTML5 web pages as like PSD and Figma to html",
    },
    {
      id: 4,
      title: "Thumbnail or Post Design",
      description:
        "I can design eye-catching thumbnails and social media posts for your YouTube channel, Facebook, Instagram, LinkedIn, and other platforms to boost engagement and increase your online presence.",
    },
    {
      id: 5,
      title: "Website from your mind",
      description:
        "I can create stunning and user-friendly website designs that bring your ideas to life, making your online presence stand out and engage visitors effectively.",
    },
  ];

  return (
    <main className="w-[95%] mx-auto" id="service">
      <header className="my-10 text-center mt-32">
        <button className="text-xl md:text-3xl font-bold py-3 px-8 rounded-md bg white">
          Service
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item.id}>
            <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded border hover:after:w-full border-white-222 hover:border-[#0a66c2] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 before:duration-300 before:-z-1 before:bg-[#0a66c2] before:absolute before:top-0 before:left-0">
              <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                {item.id}. {item.title}
              </h4>
              <a className="text-[#1D2825] group-hover:z-[5] duration-300 group-hover:text-white mt-auto flex items-center gap-2 text-sm xl:text-base">
                {item.description}
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Service;
