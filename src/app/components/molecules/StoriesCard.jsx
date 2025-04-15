export default function StoriesCard({ coverImage, avatar, title, author }) {
    return (
      <div className='max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-2xl transition-shadow duration-300'>
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className='flex items-center space-x-3 p-4'>
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className='flex flex-col'>
            <h3 className='text-black font-bold'>{title}</h3>
            <p className='text-gray-500 text-sm'>by {author}</p>
          </div>
        </div>
      </div>
    );
  }
  