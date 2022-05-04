import 'tailwindcss/tailwind.css'

const footerNavigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact Us', href: '#contact' },
]



export default function Home() {
  return (
      <><header className="bg-purple">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fixed w-full z-20 top-0 bg-purple" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b  border-indigo-500 lg:border-none">
          <div className="flex items-center ">
            <a href="#">
              <img
                className="h-10 w-auto"
                src="./images/logo.png"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-dark-purple ">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="https://www.epalux.com/"
              className="inline-block bg-dark-purple py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-light-purple hover:text-black"
            >
              Log In
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
      <section className='relative '>
        <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-8 lg:mt-16 pt-24'>
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h2 className='text-dark-purple text-3xl font-extrabold md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
              Epalux
            </h2>
            <p className='text-light-purple text-lg font-semibold text-center lg:text-left mb-6'>The safest payment method,
            with usage of WEB3.0 and BLOCKCHAIN technologies.</p>
            <div className='flex justify-center flex-wrap gap-6'>
              <a href="https://www.epalux.com/" type='button' className='btn btn-purple hover:bg-light-purple hover:text-black'>Register</a>
            </div>
          </div>
          <div className='flex justify-center flex-1 mb-8 md:mb-16 lg:mb-0 z-10'>
              <img className='w-5/6 h-5/6 mt-16 sm:w-3/4 sm:h-3/4 sm:mt-0 md:w-full md:h-full' src='/images/gvfgvf.png' alt=''></img>
            </div>  
        </div>
        <div className='hidden md:block overflow-hidden bg-purple rounded-l-full absolute h-40 w-2/4 top-48 right-0 lg: -bottom-'></div>
      </section>
      <section id='about' className='bg-white2 py-20 mt-20 lg:mt-48'>
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center font-extrabold text-dark-purple'>About Us</h1>
          <p className='text-center text-light-purple mt-4'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
        </div>
        <div className='relative mt-20 lg:mt-24'>
          <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
            <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
              <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full' src='/images/gvfgvf.png' alt=''></img>
            </div>
            <div className='flex flex-1 flex-col items-center lg:items-start'>
              <h1 className='text-3xl font-extrabold text-dark-purple'>Epalux in nutshell</h1>
              <p className='text-light-purple my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
            </div>
          </div>
        </div>
      </section>
      <section id='faq' className='bg-white0 py-20'>
        <div className='container'>
          <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
            <h1 className='text-3xl font-extrabold text-center text-dark-purple'>Frequently Asked Questions</h1>
            <p className='text-center text-light-purple mt-4'>Here are som of our FAQs. If you have any other questions feel free to email us.</p>
          </div>
          <div className='flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto'>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>What is Epalux?</span>
              <img className='object-cover h-4 w-4' src='/images/arrow.png'></img>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>How can i get it?</span>
              <img className='object-cover h-4 w-4' src='/images/arrow.png'></img>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>Is there mobile version?</span>
              <img className='object-cover h-4 w-4' src='/images/arrow.png'></img>
            </div>
            <div className='flex items-center border-b py-4'>
              <span className='flex-1'>Kolko ma Peto kg?</span>
              <img className='object-cover h-4 w-4' src='/images/arrow.png'></img>
            </div>
            <button type='button' className='flex self-center btn btn-purple hover:bg-light-purple hover:text-black mt-10'>More Info</button>
          </div>
        </div>
      </section>
      <section id='contact' className='bg-dark-purple text-white py-10'>
        <div className='sm:w-3/4 lg:w-2/4 mx-auto'>
          <p className='font-light uppercase text-center mb-8'>1,000,000+ USERS</p>
          <h1 className='text-3xl text-center font-extrabold'>Contact Us</h1>
          <div className='flex flex-col sm:flex-row gap-6 mt-8'>
            <input type='text' placeholder='Enter e-mail adress' className='flex self-center focus:outline-none flex-1 px-2 py-3 rounded-md text-black sm:self-center'/>
            <button type='button' className='flex self-center btn bg-purple text-white hover:bg-light-purple hover:text-black'>Contact Us</button>
          </div>
        </div>
      </section>
      <footer className="bg-tmava text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footerNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-dark-purple">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-white">&copy; 2022 Epalux, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </>
      
    
  )
}
