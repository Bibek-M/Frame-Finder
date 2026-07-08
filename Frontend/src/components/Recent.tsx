import {Clock} from 'lucide-react'
import MovieCard from './MovieCard';
const Recent = () => {
  return (
    <div className="px-9 py-2">
      <div className="flex gap-2.5 mb-5">
        <Clock />
        <div className="font-bold">Recent Searches</div>
      </div>
      <div className="flex justify-start items-start gap-5">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  );
}

export default Recent