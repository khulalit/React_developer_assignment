
export default function CourseCard({name, discription, instructor}) {
  return (
    <div className="w-full bg-white rounded-lg drop-shadow-lg hover:scale-110">
        <div className="w-full">
            
            <img src="https://img-b.udemycdn.com/course/240x135/382300_f75b_3.jpg" className="w-full rounded-lg" alt="thumnail"/>
        </div>
        <p className="font-600 overflow-ellipsis h-[100px] px-2 overflow-hidden">
            {name} by {instructor}
        </p>
    </div>
  )
}
