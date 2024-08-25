export default function Contact() {
  return (
    <div className="body-font min-h-screen relative bg-white dark:bg-black text-black dark:text-white ">
      <div className=" mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we love to hear from you.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-32">
          <div className="flex flex-wrap justify-center">
            <form action="https://formspree.io/f/meojkyod" method="post">
              <div className="p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    className="peer w-full rounded-lg border border-gray-700 dark:bg-black dark:bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent "
                    placeholder="Name"
                    required
                  />
                  <label
                    placeholder="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="p-2 pt-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    className="peer w-full rounded border border-gray-700 dark:bg-black bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent outline-none"
                    placeholder="Email"
                    required
                  />
                  <label
                    placeholder="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="pt-6 p-2">
                <div className="relative">
                  <textarea
                    type="message"
                    id="message"
                    name="Message"
                    className="peer h-40 resize-none rounded border border-gray-700 dark:bg-black bg-opacity-40 py-1 px-3 text-base leading-6 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:ring-2"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label
                    placeholder="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
