import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Head>
      <title>Breakio - Take a Break</title>
      <meta name="description" content="Build your meditation skills with Breakio" />
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
      </Head>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
    <span className="text-black-500">break</span>
    <span className="text-fuchsia-600">io</span>
  </h1>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Explore</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Solutions</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">About</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Blog</a>
          <a href="#" className="text-black-600 hover:text-gray-600 font-bold">Log In</a>
          <button className="bg-fuchsia-600 text-white px-4 py-2 rounded hover:bg-fuchsia-700">Start Now</button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6">
          It's time to take a break
        </h1>
        <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-2xl">
          Build your meditation skills with an app that gives you all you need!
        </p>
        
        <div className="flex items-center gap-4 pb-10">
        <input 
            type="text" 
            placeholder="Enter your name" 
            className="flex-1 px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent text-lg"
          />
          <button className="w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-3xl text-lg transition duration-300 whitespace-nowrap">
            Start Now
          </button>
        </div>

        <div className="pt-5">
          <img
            src="pic2.png"
            alt="public"
            className=""
          />
        </div>

        <div className='pt-20'>

          <div className='flex flex-col items-center justify-center text-center '>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
          Get better everyday
        </h1>
        <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
          </div>

        <button className='w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-3xl text-lg transition duration-300 whitespace-nowrap'>Start Now</button>
       
        <div className="pt-5">
          <img
            src="pic1.png"
            alt="public"
            className=""
          />

        </div>

        </div>

        <div className='flex flex-col items-center justify-center text-center pt-20 pb-20'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
          Stories from our users
        </h1>
        <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>

        <div className="pt-5">
          <img
            src="pic3.png"
            alt="public"
            className=""
          />
          </div>
          </div>

          <div className='w-full h-screen bg-fuchsia-100 min-h-screen'>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pt-20">
             What other users say
           </h1>

           <div className="mt-24 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Placerat feugiat senectus </h3>
          <p className="text-gray-600 mb-6 ">
            Ultricies pharetra arcu turpis dui massa interdum lorem.
            Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.
          </p>
          <div className='flex items-center justify-center'>
          <img
            src="pic4.png"
            alt="public"
            className="w-20 h-20 rounded-full object-cover"
          />
          </div>
          <div>
            <p className="font-bold">Jane Doe</p>
            <p className="text-gray-500">Senior Designer</p>
          </div>

          </div>
          </div>

          <div className=' pt-20 pb-20'>
            <div className='flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pb-4">
             Your favorite tools
           </h1>
           <p className="text-xl md:text-xl text-gray-600 mb-12 max-w-4xl">
            In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor.
          </p>
            </div>
          <div className='text-left'>
          <div className="max-w-6xl mx-auto px-4 py-12">
  <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
    <div className="">
          <img
            src="ic1.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Sapien amet est</h2>
      <p className="text-gray-600">
      Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.
      </p>
    </div>

    <div className="">
    <img
            src="ic2.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Tortor ornare</h2>
      <p className="text-gray-600">
      Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies. 
      </p>
    </div>

    <div className="pb-8">
    <img
            src="ic3.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Vel lacus</h2>
      <p className="text-gray-600">
      Porttitor quis lectus varius quis dolor morbi massa pellentesque.
      </p>
    </div>

    <div className="">
    <img
            src="ic4.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Hendrerit blandit</h2>
      <p className="text-gray-600">
      A aliquam pharetra in nec vitae ultrices commodo placerat eget.
      </p>
    </div>

    <div className="">
    <img
            src="ic5.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Enim risus turpis</h2>
      <p className="text-gray-600">
        Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.
      </p>
    </div>

    <div className="pb-8">
    <img
            src="ic6.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Aliquam lorem et</h2>
      <p className="text-gray-600">
      Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.
      </p>
    </div>

    <div className="">
    <img
            src="ic7.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Sed aliquam lectus</h2>
      <p className="text-gray-600">
      Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.
      </p>
    </div>

    <div className="pb-8">
    <img
            src="ic8.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Cursus diam</h2>
      <p className="text-gray-600">
      Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.
      </p>
    </div>

    <div className="pb-8">
    <img
            src="ic9.png"
            alt="public"
            className="w-20 h-15"
          />
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Facilisi vel malesuada</h2>
      <p className="text-gray-600">
      Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.
      </p>
    </div>
  </div>
</div>
          </div>
          

          </div>

          
          <div className='w-full h-screen bg-gray-100 min-h-screen'>

          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6 pt-20">
              Frequently Asked Questions
            </h1>

            <div className="">
            <p className="text-gray-600 mb-6 max-w-3xl">
            	Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum 		sollicitudin.
            </p>
        
            </div>

            
              <div className="max-w-3xl mx-auto my-12">
            	 <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                
             	 	<div className="space-y-4">
      
    		  		<div className="bg-gray-50 p-4 rounded-lg">
       				 <h3 className="font-medium text-gray-800">
          			Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
       				 </h3>
    				  </div>

     				 <div className="bg-gray-50 p-4 rounded-lg">
       			 	<h3 className="font-medium text-gray-800">
         		 	Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?
        			</h3>
     				 </div>

              <div className="bg-gray-50 p-4 rounded-lg">
       			 	<h3 className="font-medium text-gray-800">
         		 	Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?
        			</h3>
     				 </div>

              <div className="bg-gray-50 p-4 rounded-lg">
       			 	<h3 className="font-medium text-gray-800">
         		 	Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?
        			</h3>
     				 </div>

              <div className="bg-gray-50 p-4 rounded-lg">
       			 	<h3 className="font-medium text-gray-800">
         		 	Sagittis consectetur gravida nec turpis eros, id sit et, dictum?
        			</h3>
     				 </div>
      
   			 </div>

              </div>
              </div>
          </div>

          </div>
          
    <div className="mt-16 pt-8 w-full">
  <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-left">
     <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">User Interface</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">User Experience</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Digital Media</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Lifesyle</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Programming</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Animation</a></li>
      </ul>
    </div>

     <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Overview</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Browse</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Accessibility</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Five</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Changelog</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Brainstorming</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Ideation</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Wireframing</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Research</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Design</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Concept</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Tutorials</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Community</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Events</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Developers</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Integrations</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Reports</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Webinar</a></li>
      </ul>
     </div>

   <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
        <ul className="space-y-3">
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Events</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Customers</a></li>
        <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</a></li>
       </ul>
   </div>
     </div>

  <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
    <div className='flex justify-between items-center'>
    <h1 className="text-l font-bold pr-2">
    <span className="text-black-500">break</span>
    <span className="text-fuchsia-600">io</span>
     </h1>
    <p className="text-xs text-gray-500"> © 2023 - All rights reserved.</p>
    </div>
    <div className='flex justify-center items-center gap-3'>
    <img
            src="yt.png"
            alt="public"
            className="w-6 h-3"
          />
          <img
            src="fb.png"
            alt="public"
            className="w-5 h-3"
          />
          <img
            src="tw.png"
            alt="public"
            className="w-5 h-3"
          />
          <img
            src="ig.png"
            alt="public"
            className="w-5 h-5"
          />
          <img
            src="in.png"
            alt="public"
            className="w-5 h-5"
          />

    </div>
  </div>
</div>


      </main>

    </div>
  )
}