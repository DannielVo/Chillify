import { homeSections } from "../../assets/assets";
import { trendingSongs } from "../../assets/dummyDB";
import ProgressBar from "../../components/ProgressBar";
import SongCard from "../../components/SongCard";

const Home = () => {
  const MAX_SONG_ITEM = 6;
  const previewSongs = trendingSongs.slice(0, MAX_SONG_ITEM);
  return (
    <div className="px-7 py-6 space-y-10 pb-24">
      {homeSections.map((section) => (
        <section key={`home-section-${section.id}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <button className="text-primary text-sm font-semibold hover:underline cursor-pointer">
              Show all
            </button>
          </div>

          <div className="flex gap-5 hide-scrollbar pb-4">
            {previewSongs.map((song) => (
              <SongCard key={`song-${song.id}`} song={song} />
            ))}
          </div>
        </section>
      ))}
      {/* <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Trendings
          </h2>
          <button className="text-primary text-sm font-semibold hover:underline cursor-pointer">
            Show all
          </button>
        </div>

        <div className="flex gap-6 hide-scrollbar pb-4">
          {previewSongs.map((song) => (
            <SongCard key={`song-${song.id}`} song={song} />
          ))}
        </div>
      </section> */}
      <ProgressBar />
    </div>
  );
};

export default Home;
