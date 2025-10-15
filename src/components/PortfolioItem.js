export default function PortfolioItem({ item, onVideoClick }) {
  return (
    <div className="group" onClick={() => onVideoClick(item.videoUrl)}>
      <button className="bg-transparent border-0 text-left text-white w-full cursor-pointer">
        <div
          className="shine-effect w-full h-56 rounded-md bg-cover bg-center relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black text-2xl font-bold p-4 text-center">
              {item.title}
            </span>
          </div>
        </div>
        <p className="pt-4 text-xl">{item.title}</p>
      </button>
    </div>
  );
}
