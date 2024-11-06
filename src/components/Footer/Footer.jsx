const Footer = () => {
  return (
    <footer id="footer" className="bg white">
      <div className="py-10">
        <div className="flex justify-center items-center mt-8">
          <p className="md:text-base text-sm text-[#ffffff8e]">
            &copy; All Rights Reserved 2024 - {new Date().getFullYear()} |{" "}
            <button className="font-bold tracking-widest">Masud Khan</button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
