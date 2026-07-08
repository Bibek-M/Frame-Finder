import {Calendar} from "lucide-react"
const MovieCard = () => {
  return (
    <div>
      <div className="w-42">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWSehUJ9-rTQKSGZ68Q_w8_GxfQyXJSP_fFyyiOP8fw&s=10"
          alt="La La Land"
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="font-semibold">La La Land</div>
      <div className="flex gap-1">
        <Calendar color="gray" size={22}/>
        <p>2016</p>
      </div>
    </div>
  );
}

export default MovieCard