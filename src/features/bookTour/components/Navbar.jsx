export default function Navbar() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-10 bg-white justify-center items-center  border-b border-[#D4D4D4] py-3 px-4 flex">
        <a href="https://evolvestrength.ca/" className="flex items-center">
          <img
            src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1763468266957-6752d638-c064-4522-9fdf-07204e850c71.svg"
            alt="Evolve Strength Logo"
            className="w-[176px] h-[34px]"
          />
        </a>
      </div>
    </div>
  );
}
